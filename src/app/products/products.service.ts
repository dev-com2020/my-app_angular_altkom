import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private products = [
    {
      name: 'Webcam',
      price: 100,
    },
    {
      name: 'Microphone',
      price: 200,
    },
    {
      name: 'Keyboard',
      price: 85
    },
    {
      name: 'Arbuz',
      price: 5
    }
  ]

  getProducts(): Observable<Product[]>{
    return of(this.products)
  }
}