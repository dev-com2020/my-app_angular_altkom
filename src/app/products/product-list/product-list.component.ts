import { Component, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, CommonModule, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  today = new Date();
  selectedProduct: Product | undefined
  products: Product[] = []
  
  constructor(private productService: ProductsService){}

  ngOnInit(): void {
      this.products = this.productService.getProducts()
  }

  onBuy(name: string) {
    window.alert(`Zakupiłeś ${name}`)
  }
}
