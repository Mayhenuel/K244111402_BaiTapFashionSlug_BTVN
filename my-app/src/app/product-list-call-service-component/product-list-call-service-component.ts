import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductService } from '../services/product-service';
@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  minPrice:number=0
  maxPrice:number=1000
  products:Product[]=[]
  constructor(private ps:ProductService){
    // this.products=this.ps.getProducts()
  }
  ngOnInit(){
    this.products=this.ps.getProducts() 
  }
  doFilter(){
    this.products=this.ps.getProducts().filter(p=>p.price>=this.minPrice && p.price<=this.maxPrice)
  }
}