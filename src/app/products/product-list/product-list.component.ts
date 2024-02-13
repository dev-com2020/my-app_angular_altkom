import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, CommonModule, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  today = new Date();
  selectedProduct: Product | undefined
  products: Product[] = [
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

  onBuy(name: string) {
    window.alert(`Zakupiłeś ${name}`)
  }
}
