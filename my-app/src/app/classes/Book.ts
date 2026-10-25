export interface IBook{
    BookId:string,
    BookName:string,
    Price:number,
    Image:string
}
export class Book{
    constructor(
        public BookId:string="",
        public BookName:string="",
        public Price:number=0,
        public Image:string="",
        public ImageBase64:string="")
    {}
}


