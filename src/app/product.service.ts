import {Injectable} from '@angular/core';
import {Product} from './model/Product';
import {PRODUCTS} from './mock/mock-products';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) {
  }

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }
}
