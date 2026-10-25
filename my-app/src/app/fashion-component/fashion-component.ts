import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FashionAPIService } from '../services/fashion-apiservice';
import { Fashion } from '../classes/Fashion';
import { createSlug } from '../classes/SlugHelper';

@Component({
  selector: 'app-fashion-component',
  standalone: false,
  templateUrl: './fashion-component.html',
  styleUrl: './fashion-component.css',
})
export class FashionComponent {
  fashions=signal<Fashion[]>([]);
  errMessage=signal('')
  constructor(public _service: FashionAPIService, private router: Router){
    this._service.getFashions().subscribe({
      next:(data)=>{this.fashions.set(data.map((fashion) => Object.assign(new Fashion(), fashion)))},
      error:(err: unknown)=>{this.errMessage.set(err instanceof Error ? err.message : String(err))}
    })
  }

  fashionSlug(fashion: Fashion): string {
    return createSlug(fashion.fashion_subject || fashion.style || 'fashion', fashion.IdF ?? 0);
  }

  viewFashion(fashion: Fashion): void {
    if (fashion.IdF === null) {
      this.errMessage.set('Fashion này chưa có IdF hợp lệ.');
      return;
    }
    this.router.navigate(['/fashion', this.fashionSlug(fashion)]);
  }
}

