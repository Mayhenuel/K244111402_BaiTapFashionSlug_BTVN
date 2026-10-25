import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
    products: Product[]=[
        {id:1, name:"Laptop", price: 990, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6l9uuxN4yWUTl9K2kdMOrGzyWgBGvFqLt6XxDWvYn-w&s=10"},
        {id:2, name:"Smartphone", price: 1090, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6h1unvQGQnLEtbaoz8eKlJKDZOkHcpiGmQG3D0nT6dA&s"},
        {id:3, name:"Tablet", price: 500, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvMLFZQ-svhenfOqigdXpMKomZBDN3eg0nKgQfV-eCw&s=10"},
        {id:4, name:"Smartwatch", price: 300, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1xomSbKk2ie8xKVXwfOeiPAg8xobNaDFtK1mlRowTA&s"},
      ];
    constructor (){}
        getProducts(){
            return this.products
    }
}
