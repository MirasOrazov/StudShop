import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productLists: any[];

  constructor(private service:ProductlistService) { }

  ngOnInit(): void {
    this.getProductLists();
  }
  getProductLists(){
    const observableProductLists = this.service.getProductLists();
    observableProductLists.subscribe(productLists => this.productLists = productLists);
  }
}
