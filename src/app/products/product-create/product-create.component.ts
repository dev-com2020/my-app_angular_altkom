import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
@Output() added = new EventEmitter<Product>()

constructor(private productService: ProductsService) {}

createProduct(name:string,price:number){
  this.productService.addProduct(name,price).subscribe(product => {
    this.added.emit(product)
  })
}
}
