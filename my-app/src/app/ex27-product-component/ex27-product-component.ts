import { Component, signal } from '@angular/core';
import { ex27ProductService } from '../services/ex27-product-service';
import { excercise27 } from '../classes/exercise27';
@Component({
  selector: 'app-ex27-product-component',
  standalone: false,
  templateUrl: './ex27-product-component.html',
  styleUrl: './ex27-product-component.css', 
})
export class Ex27ProductComponent {
  products=signal<excercise27[]>([])
  errMessage=signal('')
  constructor(private _service:ex27ProductService){
  }
  ngOnInit():void
  {
    this._service.getFakeProductData().subscribe({
      next:(data)=>{ this.products.set(data)},
      error:(err)=>{
        this.errMessage.set(err)
      }
    })
  }
}
