import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  products: Product[] = []
  constructor(private productService: ProductsService){}

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    })
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
