const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3002;
const client = new MongoClient('mongodb://127.0.0.1:27017');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const database = client.db('FashionData');
const fashionCollection = database.collection('Fashion');
const counterCollection = database.collection('Counters');

app.get('/', (req, res) => {
  res.send('This Web server is processed for MongoDB');
});

async function nextFashionIdF() {
  const counter = await counterCollection.findOneAndUpdate(
    { _id: 'fashion-idf' },
    { $inc: { value: 1 } },
    { returnDocument: 'after', upsert: true, includeResultMetadata: false }
  );

  if (!counter || !Number.isSafeInteger(counter.value)) {
    throw new Error('Unable to allocate a unique Fashion IdF.');
  }
  return counter.value;
}

async function initializeFashionIds() {
  const fashions = await fashionCollection.find({}, { projection: { _id: 1, IdF: 1 } }).toArray();
  const validIds = fashions
    .map((fashion) => fashion.IdF)
    .filter((idF) => Number.isSafeInteger(idF) && idF > 0);
  const usedIds = new Set();
  const maxIdF = validIds.reduce((maximum, idF) => Math.max(maximum, idF), 0);

  await counterCollection.updateOne(
    { _id: 'fashion-idf' },
    { $max: { value: maxIdF } },
    { upsert: true }
  );

  for (const fashion of fashions) {
    if (!Number.isSafeInteger(fashion.IdF) || fashion.IdF <= 0 || usedIds.has(fashion.IdF)) {
      const IdF = await nextFashionIdF();
      await fashionCollection.updateOne({ _id: fashion._id }, { $set: { IdF } });
      usedIds.add(IdF);
    } else {
      usedIds.add(fashion.IdF);
    }
  }

  await fashionCollection.createIndex({ IdF: 1 }, { unique: true });
}

app.get('/fashions', async (req, res) => {
  try {
    const fashions = await fashionCollection.find({}).sort({ IdF: 1 }).toArray();
    res.json(fashions);
  } catch (error) {
    console.error('Failed to load Fashion list:', error);
    res.status(500).json({ message: 'Không thể tải danh sách Fashion.' });
  }
});

app.get('/fashions/idf/:idF', async (req, res) => {
  const idF = Number(req.params.idF);
  if (!Number.isSafeInteger(idF) || idF <= 0) {
    return res.status(400).json({ message: 'IdF không hợp lệ.' });
  }

  try {
    const fashion = await fashionCollection.findOne({ IdF: idF });
    if (!fashion) {
      return res.status(404).json({ message: 'Không tìm thấy Fashion.' });
    }
    return res.json(fashion);
  } catch (error) {
    console.error('Failed to load Fashion by IdF:', error);
    return res.status(500).json({ message: 'Không thể tải chi tiết Fashion.' });
  }
});

app.get('/fashions/:id', async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Fashion ID không hợp lệ.' });
  }

  try {
    const fashion = await fashionCollection.findOne({ _id: new ObjectId(req.params.id) });
    if (!fashion) {
      return res.status(404).json({ message: 'Không tìm thấy Fashion.' });
    }
    return res.json(fashion);
  } catch (error) {
    console.error('Failed to load Fashion by MongoDB ID:', error);
    return res.status(500).json({ message: 'Không thể tải chi tiết Fashion.' });
  }
});

app.post('/fashions', async (req, res) => {
  try {
    const fashion = { ...req.body, IdF: await nextFashionIdF() };
    delete fashion._id;
    const result = await fashionCollection.insertOne(fashion);
    return res.status(201).json({ ...fashion, _id: result.insertedId });
  } catch (error) {
    console.error('Failed to create Fashion:', error);
    return res.status(500).json({ message: 'Không thể tạo Fashion.' });
  }
});

app.put('/fashions', async (req, res) => {
  if (!ObjectId.isValid(req.body._id)) {
    return res.status(400).json({ message: 'Fashion ID không hợp lệ.' });
  }

  try {
    const _id = new ObjectId(req.body._id);
    const result = await fashionCollection.updateOne(
      { _id },
      {
        $set: {
          style: req.body.style,
          fashion_subject: req.body.fashion_subject,
          fashion_detail: req.body.fashion_detail,
          fashion_image: req.body.fashion_image
        }
      }
    );

    if (!result.matchedCount) {
      return res.status(404).json({ message: 'Không tìm thấy Fashion.' });
    }
    return res.json(await fashionCollection.findOne({ _id }));
  } catch (error) {
    console.error('Failed to update Fashion:', error);
    return res.status(500).json({ message: 'Không thể cập nhật Fashion.' });
  }
});

app.delete('/fashions/:id', async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Fashion ID không hợp lệ.' });
  }

  try {
    const result = await fashionCollection.findOneAndDelete({
      _id: new ObjectId(req.params.id)
    });
    if (!result) {
      return res.status(404).json({ message: 'Không tìm thấy Fashion.' });
    }
    return res.json(result);
  } catch (error) {
    console.error('Failed to delete Fashion:', error);
    return res.status(500).json({ message: 'Không thể xóa Fashion.' });
  }
});

async function startServer() {
  try {
    await client.connect();
    await initializeFashionIds();
    app.listen(port, () => {
      console.log(`My Server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start Fashion API:', error);
    process.exitCode = 1;
  }
}

startServer();
