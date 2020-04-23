import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductlistService } from '../productlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[];
  ProductListType;
  productLists;
  searchStr = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: ProductlistService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getProductLists();
    this.route.paramMap.subscribe(params =>{
      this.ProductListType = this.productLists[+params.get('productListId')];
    });
  }
  getProducts() {
    const observableProducts = this.productService.getProducts();
    observableProducts.subscribe(item => this.products = item);
  }
  getProductLists() {
    const observableProductLists = this.categoryService.getProductLists();
    observableProductLists.subscribe(productLists => this.productLists = productLists);
  }

}
