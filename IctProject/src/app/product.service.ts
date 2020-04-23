import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = products;
  constructor() { }
  getProducts(): Observable<any[]>{
    return of(this.products)
  }
}
