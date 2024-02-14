import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { priceRangeValidator } from '../price-range.directive';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  @Output() added = new EventEmitter<Product>()

  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  })
  showPriceRangeHint = false

  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
      this.price.valueChanges.subscribe(price =>{
        if (price) {
          this.showPriceRangeHint = price > 1 && price < 10000
        }
      })
  }

  createProduct() {
    this.productService.addProduct(this.name.value,
      Number(this.price.value)).subscribe(product => {
        this.productForm.reset()
        this.added.emit(product)
      })
  }
}
