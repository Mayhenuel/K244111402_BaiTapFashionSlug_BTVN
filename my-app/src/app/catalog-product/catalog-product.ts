import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-catalog-product',
  standalone: false,
  styleUrl: './catalog-product.css',
  templateUrl: './catalog-product.html',
})
export class CatalogProduct {
  public categories : any; 
  constructor (private catalogService: CatalogService){
   this.categories = this.catalogService.getCategories(); 
  }
}

