import { Component, signal } from '@angular/core';
import { IBook } from '../classes/Book';
import { BookAPIService } from '../services/book-apiservice';

@Component({
  selector: 'app-book-delete-component',
  standalone: false,
  templateUrl: './book-delete-component.html',
  styleUrl: './book-delete-component.css',
})
export class BookDeleteComponent {
  books=signal<IBook[]>([]);
  errMessage=signal('')
  server_images_link="http://localhost:3000/images/"
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books.set(data)},
      error:(err)=>{this.errMessage.set(err)}
    })
  }
  // Function to handle book deletion
  deleteBook(bookId: string) {
    // 1. Show a confirmation dialog to the user
    const isConfirm = window.confirm("Are you sure you want to delete this book?");
    // 2. If the user clicks 'OK', proceed with deletion
    if (isConfirm) {
      this._service.deleteBook(bookId).subscribe({
        next: (data) => {
          // Update the signal with the new list of books from the server
          this.books.set(data);
        },
        error: (err) => {
          // Display error message if deletion fails
          this.errMessage.set(err.message);
        }
      });
    }
  }
}


