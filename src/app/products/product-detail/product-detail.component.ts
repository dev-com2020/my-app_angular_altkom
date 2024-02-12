import { CommonModule } from '@angular/common';
import {
  Component, Input, Output, EventEmitter, ViewEncapsulation,
  ChangeDetectionStrategy, OnInit, OnChanges, SimpleChange,
  SimpleChanges
} from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {

  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.product?.name} in the constructor`)
  }

  ngOnInit(): void {
    console.log(`Name is ${this.product?.name} in the ngOnInit`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product']
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue.name
      const newValue = product.currentValue.name
      console.log(`Product change from ${oldValue} to ${newValue}`)
    }
  }

  buy() {
    this.bought.emit(this.product?.name);
  }

  get productName(): any {
    console.log(`Get ${this.product?.name}`)
    return this.product?.name
  }
}

