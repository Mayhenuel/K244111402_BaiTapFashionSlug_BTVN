import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IFakeProduct } from '../classes/IFakeProduct';

@Injectable({
  providedIn: 'root',
})
export class FakeProductService {
  private _url:string="/products" //Vi api la https://fakestoreapi.com/products nen chi can lay duong dan sau /products la duoc 
  constructor(private _http: HttpClient) { }
  getFakeProductData():Observable<any> {
    const headers=new HttpHeaders().set("Content-Type","text/plain;charset=utf-8")
    const requestOptions:Object={
      headers:headers,
      responseType:"text"
    } //Tu dong 12 den 17 la de lay du lieu tu api ve dang text, sau do ta se parse ve dang json de xu ly tiep
    return this._http.get<any>(this._url,requestOptions).pipe(
        map(res=>JSON.parse(res) as Array<IFakeProduct>), // Tra ve array IFakeProduct vi bat dau moi product la ngoac vuong []
        retry(3),
        catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
}


