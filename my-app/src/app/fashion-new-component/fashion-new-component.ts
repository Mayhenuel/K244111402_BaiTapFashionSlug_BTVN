import { Component } from '@angular/core';
import { Fashion } from '../classes/Fashion';
import { FashionAPIService } from '../services/fashion-apiservice';
import { createSlug } from '../classes/SlugHelper';

@Component({
  selector: 'app-fashion-new-component',
  standalone: false,
  templateUrl: './fashion-new-component.html',
  styleUrl: './fashion-new-component.css',
})
export class FashionNewComponent {
  fashion=new Fashion();
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  }
  fashionSlug(): string {
    return createSlug(this.fashion.fashion_subject || this.fashion.style || 'fashion', this.fashion.IdF ?? 0);
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
  postFashion()
  {
    this._service.postFashion(this.fashion).subscribe({
      next:(data)=>{this.fashion=Object.assign(new Fashion(), data)},
      error:(err: unknown)=>{this.errMessage=err instanceof Error ? err.message : String(err)}
    })
  }
}
