import {Injectable} from '@angular/core';
import {Product} from './model/Product';
import {PRODUCTS} from './mock/mock-products';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }
}
