import { Component, signal } from '@angular/core';
import { Book, IBook } from '../classes/Book';
import { BookAPIService } from '../services/book-apiservice';

@Component({
  selector: 'app-book-new-component',
  standalone: false,
  templateUrl: './book-new-component.html',
  styleUrl: './book-new-component.css',
})
export class BookNewComponent {
  book=new Book();
  books=signal<IBook[]>([])
  errMessage=signal('')
  server_images_link="http://localhost:3000/images/"
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books.set(data)},
      error:(err)=>{this.errMessage.set(err)}
    })
  }
  postBook() {
  this._service.postBook(this.book).subscribe({
    next: (data: any) => {
      this.books.set(data.database);
      this.book = new Book();
      this.errMessage.set('');
    },
    error: (err) => {
      this.errMessage.set(
        err.error?.message || 'Không thể thêm sách'
      );
    }
  });
}
  // Function to handle file selection
  onFileSelected(event: any) {
    // Get the first file selected by the user
    const file: File = event.target.files[0];
    if (file) {
      // 1. Assign the original file name to the Image property
      // (for saving the name to the DB)
      this.book.Image = file.name;
      // 2. Initialize the FileReader object to read the file
      const reader = new FileReader();
      // 3. Define the action to be performed AFTER reading the file is complete
      reader.onload = (e: any) => {
        // The read result (e.target.result) is the Base64 string (Data URL)
        this.book.ImageBase64 = e.target.result;
        // console.log("Base64 string:", this.book.ImageBase64);
        //alert(this.book.ImageBase64)
      };
      // 4. Execute the command to read the file as a Base64 string (Data URL)
      reader.readAsDataURL(file);
    }
  }
}


