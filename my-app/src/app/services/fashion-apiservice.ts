
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Fashion } from '../classes/Fashion';

@Injectable({
  providedIn: 'root',
})
export class FashionAPIService {
  private apiUrl = 'http://localhost:3002/fashions';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private _http: HttpClient) {}

  getFashions(): Observable<Fashion[]> {
    return this._http.get<Fashion[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getFashion(id: string): Observable<Fashion> {
    return this._http.get<Fashion>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getFashionByIdF(idF: number): Observable<Fashion> {
    return this._http.get<Fashion>(`${this.apiUrl}/idf/${idF}`).pipe(
      catchError(this.handleError)
    );
  }

  postFashion(aFashion: Fashion): Observable<Fashion> {
    return this._http.post<Fashion>(this.apiUrl, aFashion, {
      headers: this.headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => error);
  }
  putFashion(aFashion: Fashion): Observable<Fashion>
    {
      return this._http.put<Fashion>(this.apiUrl, aFashion, { headers: this.headers }).pipe(
          retry(3),
          catchError(this.handleError))
    }
  deleteFashion(fashionId:string):Observable<any>
    {
      return this._http.delete<Fashion>(`${this.apiUrl}/${fashionId}`).pipe(
          retry(3),
          catchError(this.handleError))
    }



}
