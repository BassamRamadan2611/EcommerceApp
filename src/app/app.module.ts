import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './MaterialUi/material/material.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

import { AuthModule } from './Auth/auth/auth.module';
import { SearchPipe } from './Pipes/search.pipe';





@NgModule({
  declarations: [
    AppComponent,
    
    SearchPipe

    

  
   
  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    CartsModule,
    SharedModule,
    MaterialModule,
    AuthModule,
    SearchPipe,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase ),

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
