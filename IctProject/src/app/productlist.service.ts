import { Injectable } from '@angular/core';
import {productLists} from './productLists';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  productLists = productLists;
  constructor() { }
  getProductLists(): Observable<any[]>{
    return of(this.productLists);
  }
}
