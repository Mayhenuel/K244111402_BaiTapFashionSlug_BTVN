import { Component, signal } from '@angular/core';
import { Product } from '../classes/IProduct';
import { createSlug } from '../classes/SlugHelper';
import { ProductHttpHandleErrorService } from '../services/product-http-handle-error-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list-search-component',
  standalone: false,
  templateUrl: './product-list-search-component.html',
  styleUrl: './product-list-search-component.css',
})
export class ProductListSearchComponent {
  // Toàn bộ sản phẩm từ server
  products=signal<Product[]>([]);
  //check error
  errMessage=signal("")
  // Sản phẩm sau khi đã lọc
  filteredProducts = signal<Product[]>([]);
  // Biến giữ giá trị lọc để hiển thị lên UI
  minPrice = signal<number>(0);
  maxPrice = signal<number>(5000);
  public generateSlug = createSlug;
constructor(private _service:ProductHttpHandleErrorService,
    private router:Router,
    private activateRoute:ActivatedRoute){
  }
  ngOnInit(): void {
    // 1. Tải toàn bộ sản phẩm về trước
    this._service.getProductList().subscribe({
      next: (data) => {
        this.products.set(data);
        this.watchQueryParams();
      },error: (err) =>{
        this.errMessage.set(err)
      }
    });
  }
  private watchQueryParams() {
    this.activateRoute.queryParamMap.subscribe(params => {
      const min = Number(params.get('min')) || 0;
      const max = Number(params.get('max')) || 5000;
      this.minPrice.set(min);
      this.maxPrice.set(max);
      // Thực hiện lọc logic
      const result = this.products().filter(p => p.price >= min && p.price <= max); //Truy van du lieu 
      this.filteredProducts.set(result);
    });
  }
// Hàm gọi khi nhấn nút "Lọc"
  onFilter() {
    this.router.navigate([], {
      relativeTo: this.activateRoute,
      queryParams: {
        min: this.minPrice(),
        max: this.maxPrice()
      },
      queryParamsHandling: 'merge' // Giữ lại các params khác nếu có
    });
  }
  viewDetail(id:number)
  {
    this.router.navigate(["/products",id])
  }
  viewDetailSlug(p:Product)
  {
    let slug=this.generateSlug(p.name,p.id)
    this.router.navigate(["/products",slug])
  }  
}


