import { Component } from '@angular/core';
import { IProduct } from './product';

//selector prop not used when only getting here by routing
@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
}