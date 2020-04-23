import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannerHeaderComponent } from './banner-header/banner-header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BannerHeaderComponent,
    FooterComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component:BannerHeaderComponent },
      { path: 'productList', component: ProductListComponent},
      { path: 'productList/:productListId/products', component: ProductComponent},
      { path: 'productList/:productListId/products/:productId', component: ProductDetailsComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
