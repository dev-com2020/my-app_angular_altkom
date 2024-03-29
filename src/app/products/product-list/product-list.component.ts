import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { SortPipe } from '../sort.pipe';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { Subscription, Observable } from 'rxjs';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent, CommonModule, SortPipe, RouterLink, 
    FavoritesComponent, ProductViewComponent, ProductCreateComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})
export class ProductListComponent implements OnInit {
  today = new Date();
  // private productsSub: Subscription | undefined
  selectedProduct: Product | undefined
  // products$: Observable<Product[]> | undefined
  products: Product[] = []
  
  constructor(private productService: ProductsService){}

  // private getProducts(){
  //   this.products$ = this.productService.getProducts()
  // }
  private getProducts(){
    this.productService.getProducts().subscribe(products => {
    this.products = products
  })
}

  ngOnInit(): void {
      this.getProducts()
  }
  

  onBuy() {
    window.alert(`Zakupiłeś ${this.selectedProduct?.name}`)
  }

  onAdd(product: Product){
    this.products.push(product)
  }
}
