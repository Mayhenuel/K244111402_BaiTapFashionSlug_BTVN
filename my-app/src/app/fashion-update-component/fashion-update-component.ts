import { Component } from '@angular/core';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { createSlug } from '../classes/SlugHelper';

@Component({
  selector: 'app-fashion-update-component',
  standalone: false,
  templateUrl: './fashion-update-component.html',
  styleUrl: './fashion-update-component.css',
})
export class FashionUpdateComponent {
  fashion=new Fashion();
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  }
  fashionSlug(): string {
    return createSlug(this.fashion.fashion_subject || this.fashion.style || 'fashion', this.fashion.IdF ?? 0);
  }

  loadFashion(id: string): void {
    const mongoId = id.trim();
    if (!mongoId) {
      this.errMessage = 'Vui lòng nhập MongoDB ID của Fashion.';
      return;
    }

    this.errMessage = '';
    this._service.getFashion(mongoId).subscribe({
      next: (data) => {
        this.fashion = Object.assign(new Fashion(), data);
      },
      error: (err: unknown) => {
        this.errMessage = err instanceof Error ? err.message : String(err);
      }
    });
  }

  onFileSelected(event:any,fashion:Fashion) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image=reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }
  putFashion()
  {
    this._service.putFashion(this.fashion).subscribe({
      next:(data)=>{this.fashion=Object.assign(new Fashion(), data)},
      error:(err: unknown)=>{this.errMessage=err instanceof Error ? err.message : String(err)}
    })
  }
}
