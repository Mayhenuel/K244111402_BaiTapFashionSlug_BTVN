import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpService } from '../services/product-http-service';

@Component({
  selector: 'app-product-list-call-http-service-component',
  standalone: false,
  styleUrl: './product-list-call-http-service-component.css',
  templateUrl: './product-list-call-http-service-component.html',
})
export class ProductListCallHttpServiceComponent implements OnInit {
  // 1. Sửa cú pháp signal
  products = signal<Product[]>([]); 

  constructor(private _service: ProductHttpService) {}

  // 2. Sửa ngOnIt thành ngOnInit
  ngOnInit(): void {
    // 4. Bỏ khoảng trắng dư thừa ở this._service
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error) => {
        console.log(error);
        // 3. Sửa lại vị trí dấu đóng ngoặc của alert()
        alert(
          "Error Occured while fetching data from server: " +
            JSON.stringify(error)
        );
      },
    });
  }
}