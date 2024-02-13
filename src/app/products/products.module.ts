import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    ProductListComponent,
    ProductDetailComponent,
    SortPipe
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
