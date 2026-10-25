import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { ProductHttpService } from '../services/product-http-service';
import { ActivatedRoute, Router } from '@angular/router';
import { createSlug } from '../classes/SlugHelper'; 
@Component({
  selector: 'app-product-list-advanced-component',
  standalone: false,
  styleUrl: './product-list-advanced-component.css',
  templateUrl: './product-list-advanced-component.html',
})
export class ProductListAdvancedComponent {
  products = signal<Product[]>([]);
  errMessage = signal('');
  public generateSlug=createSlug; 
  constructor(
    private _service: ProductHttpService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}
   ngOnInit(): void {
    // 4. Bỏ khoảng trắng dư thừa ở this._service
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error) => {
        console.log(error);
        alert(
          "Error Occured while fetching data from server: " +
            JSON.stringify(error)
        );
      },
    });
  }
  viewDetail(id:number){
    this.router.navigate(['/product-detail',id])
  }
    viewDetailSlug(p:Product)
  {
    let slug=this.generateSlug(p.name,p.id)
    this.router.navigate(["/products",slug])
  }

}
