import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerLoaderComponent,
    ProductComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule


  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    SpinnerLoaderComponent,
    ProductComponent,
    SearchPipe
  ]
  
})
export class SharedModule { }
