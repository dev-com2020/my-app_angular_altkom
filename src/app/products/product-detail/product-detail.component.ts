import { CommonModule } from '@angular/common';
import {
  Component, Input, Output, EventEmitter, ViewEncapsulation,
  ChangeDetectionStrategy, OnInit, OnChanges, SimpleChange,
  SimpleChanges
} from '@angular/core';
import { Product } from '../product';
import { Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthComponent } from '../../auth/auth/auth.component';
import { AuthService } from '../../auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, AuthComponent, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {

  @Input() id = -1
  @Input() product: Product | undefined
  @Output() bought = new EventEmitter<string>();
  product$: Observable<Product> | undefined
  price: number | undefined

  constructor(private productService: ProductsService,private route: ActivatedRoute) {
    // console.log(`Name is ${this.product?.name} in the constructor`)
  }

  ngOnInit(): void {
    // console.log(`Name is ${this.product?.name} in the ngOnInit`)
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
      )
  }

  ngOnChanges(): void {
    // const product = changes['product']
    // if (!product.isFirstChange()) {
    //   const oldValue = product.previousValue.name
    //   const newValue = product.currentValue.name
    //   console.log(`Product change from ${oldValue} to ${newValue}`)
    // const id = this.route.snapshot.params['id']
    this.product$ = this.productService.getProduct(this.id)
    }
  

  buy() {
    this.bought.emit();
  }

  get productName(): any {
    console.log(`Get ${this.product?.name}`)
    return this.product?.name
  }

  changePrice(product: Product, price: number){
    this.productService.updateProduct(product.id,price).subscribe(()=>{
      alert(`Cena produktu ${product.name} została zmieniona`)
    }
    )
  }
}

