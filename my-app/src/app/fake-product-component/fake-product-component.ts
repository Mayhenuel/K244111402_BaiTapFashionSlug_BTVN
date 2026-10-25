import { Component, signal } from '@angular/core';
import { FakeProductService } from '../services/fake-product-service';
import { IFakeProduct } from '../classes/IFakeProduct';

@Component({
  selector: 'app-fake-product-component',
  standalone: false,
  templateUrl: './fake-product-component.html',
  styleUrl: './fake-product-component.css',
})
export class FakeProductComponent {
  products=signal<IFakeProduct[]>([])
  errMessage=signal('')
  constructor(private _service:FakeProductService){
  } //constructor de inject service FakeProductService vao component de goi api lay du lieu
  ngOnInit():void // ngOnInit de goi service lay du lieu tu api khi component duoc khoi tao 
  {
    this._service.getFakeProductData().subscribe({
      next:(data)=>{ this.products.set(data)},
      error:(err)=>{
        this.errMessage.set(err)
      }
    })
  }
}


