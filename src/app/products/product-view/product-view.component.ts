import { Component, Input, OnInit } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
@Input() id = -1
name = ''
constructor(private productViewService: ProductViewService) {}

private getProduct() {
  this.productViewService.getProduct(this.id).subscribe(product =>{
    if (product) {
      this.name = product.name
    }
  })
}


ngOnInit(): void {
  this.getProduct()
}
}
