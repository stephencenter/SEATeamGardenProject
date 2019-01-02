import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private _dbUrl = "https://efa-gardenapp-backend.herokuapp.com/api/product"

  constructor(private _http: HttpClient) { }

  getBooks(): Observable<Product[]> {
    return this._http.get<Product[]>(this._dbUrl)
  }
}