import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { authGuard } from './auth/auth.guard';
import { productDetailResolver } from './products/product-detail.resolver';

export const routes: Routes = [
    { path: 'cart', component: CartComponent, canActivate: [authGuard] },
    {
        path: 'products', component: ProductListComponent,
        // children: [
        //     { path: ':id', component: ProductDetailComponent }
        // ]
    },
    {
        path: 'products/:id', component: ProductDetailComponent,
        resolve: {
            product: productDetailResolver
        }
    },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
