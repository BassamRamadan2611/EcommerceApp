import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { SearchPipe } from '../Pipes/search.pipe';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SearchPipe
  ],
  exports:[
   

    SearchPipe
  ]
})
export class ProductsModule { }
