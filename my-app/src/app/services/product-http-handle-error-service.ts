import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/IProduct';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpHandleErrorService {
  private _url: string = '/dataset/products.json';

  constructor(private _http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this._http.get<Product[]>(this._url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';

  if (error.error instanceof ErrorEvent) {
    errorMessage = `Client-side error: ${error.error.message}`;
  } else {
    errorMessage = `
      Error Status: ${error.status}
      Status Text: ${error.statusText}
      URL: ${error.url}
      Server Details: ${
        error.error
          ? JSON.stringify(error.error)
          : 'No details available'
      }
    `;
  }

  console.error(errorMessage);

  return throwError(() => new Error(errorMessage));
}
}
