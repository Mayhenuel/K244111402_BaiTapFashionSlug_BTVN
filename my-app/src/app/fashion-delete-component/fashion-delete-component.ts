import { Component, signal } from '@angular/core';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';

@Component({
  selector: 'app-fashion-delete-component',
  standalone: false,
  templateUrl: './fashion-delete-component.html',
  styleUrl: './fashion-delete-component.css',
})
export class FashionDeleteComponent {
  fashions=signal<Fashion[]>([]);
  errMessage=signal('')
  constructor(public _service: FashionAPIService){
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions.set(data)},
      error:(err)=>{this.errMessage.set(err)}
    })
  }
  deleteFashion(id:string) {
    const isConfirm = window.confirm("Are you sure you want to delete this Fashion?");
    if (isConfirm) {
      this._service.deleteFashion(id).subscribe({
        next: (data) => {
          this.fashions.update(currentList => 
          currentList.filter(f => f._id !== id)
        );
        },
        error: (err) => {
          // Display error message if deletion fails
          this.errMessage.set(err.message);
        }
      });
    }
  }
}


