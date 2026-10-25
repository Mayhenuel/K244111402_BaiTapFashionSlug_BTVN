import { Component } from '@angular/core';
import { ProductService2 } from '../services/product-service2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  styleUrl: './service-product-image-event.css',
  templateUrl: './service-product-image-event.html',
})
export class ServiceProductImageEvent {
  public products:any
  constructor (pservice: ProductService2, private router: Router){
  this.products = pservice.getProductsWithImage()
  }
  viewDetail (f:any)
  {
    this.router.navigate (['service-product-image-event', f.ProductId])
  }
}
