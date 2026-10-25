import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';
@Component({
  selector: 'app-product-http-handle-error-service-component',
  standalone: false,
  styleUrl: './product-http-handle-error-service-component.css',
  templateUrl: './product-http-handle-error-service-component.html',
})
export class ProductHttpHandleErrorServiceComponent {
  products=signal<Product[]> ([]); 
  errMessage =signal("")
  constructor(private _service:ProductHttpHandleErrorService) { }
    ngOnit():void{
      this. _service.getProductList().subscribe({
        next:(data)=>{
          this.products.set(data); 
        }, 
        error: (err)=> {
          this.errMessage.set(err)
        }
      })
    }
  
}
