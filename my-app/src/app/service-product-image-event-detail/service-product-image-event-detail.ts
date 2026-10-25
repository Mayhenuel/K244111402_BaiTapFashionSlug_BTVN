import { Component } from '@angular/core';
import { ProductService2 } from '../services/product-service2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  styleUrl: './service-product-image-event-detail.css',
  templateUrl: './service-product-image-event-detail.html',
})
export class ServiceProductImageEventDetail {
  selectedProduct: any;
  constructor(private activateRoute:ActivatedRoute,private _fs: ProductService2, 
private router:Router) 
  { 
    activateRoute.paramMap.subscribe( 
      (param)=>{ 
        let id=param.get('id') 
         
        if(id!=null) 
        { 
          this.selectedProduct=_fs.getProductDetails(id)           
        } 
      } 
    ) 
  } 
  goBack(){ 
    this.router.navigate(['service-product-image-event']) 
  } 
}
