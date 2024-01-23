import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { SelectComponent } from './components/select/select.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    LoaderSpinnerComponent,
    SelectComponent,
    AddProductComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  
  ],
  exports:[
   
  ]
})
export class SharedModule { }
