import {
  Component, Input, Output, EventEmitter, ViewEncapsulation,
  ChangeDetectionStrategy, OnInit, OnChanges, SimpleChange,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {

  @Input() name = ''
  @Output() bought = new EventEmitter<string>();

  constructor() {
    console.log(`Name is ${this.name} in the constructor`)
  }

  ngOnInit(): void {
    console.log(`Name is ${this.name} in the ngOnInit`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name']
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue
      const newValue = product.currentValue
      console.log(`Product change from ${oldValue} to ${newValue}`)
    }
  }

  buy() {
    this.bought.emit(this.name);
  }

  get productName(): string {
    console.log(`Get ${this.name}`)
    return this.name
  }
}

