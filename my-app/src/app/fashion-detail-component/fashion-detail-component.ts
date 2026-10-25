import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { createSlug, extractIdFromSlug } from '../classes/SlugHelper';

@Component({
  selector: 'app-fashion-detail-component',
  standalone: false,
  templateUrl: './fashion-detail-component.html',
  styleUrl: './fashion-detail-component.css',
})
export class FashionDetailComponent implements OnInit {
  fashion=signal<Fashion|null>(null);
  errMessage=signal('')
  constructor(private _service: FashionAPIService, private route: ActivatedRoute){}

  fashionSlug(fashion: Fashion): string {
    return createSlug(fashion.fashion_subject || fashion.style || 'fashion', fashion.IdF ?? 0);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      if (slug) {
        const idF = extractIdFromSlug(slug);
        if (idF === null) {
          this.fashion.set(null);
          this.errMessage.set('Slug Fashion không hợp lệ.');
          return;
        }
        this.loadFashion(idF);
      }
    });
  }

  searchFashion(identity:string){
    const idF = extractIdFromSlug(identity) ?? Number(identity);
    if (!Number.isSafeInteger(idF) || idF <= 0) {
      this.fashion.set(null);
      this.errMessage.set('Vui lòng nhập IdF hoặc slug Fashion hợp lệ.');
      return;
    }
    this.loadFashion(idF);
  }

  private loadFashion(idF: number): void {
    this.fashion.set(null)
    this.errMessage.set("")
    this._service.getFashionByIdF(idF).subscribe({
      next:(data)=>{
        if (!data) {
          this.errMessage.set('Không tìm thấy Fashion tương ứng.');
          return;
        }
        this.fashion.set(Object.assign(new Fashion(), data));
      },
      error:(err: unknown)=>{
        this.fashion.set(null);
        this.errMessage.set(err instanceof Error ? err.message : 'Không tìm thấy Fashion tương ứng.');
      }
    })
  }
}
