import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CartComponent } from './carts/components/cart/cart.component';

import { ProductsComponent } from './products/components/products/products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { LoginComponent } from './Auth/auth/components/login/login.component';
import { RegisterComponent } from './Auth/auth/components/register/register.component';
import { ForgotPasswordComponent } from './Auth/auth/components/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './Auth/auth/components/varify-email/varify-email.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'varify-email',component:VarifyEmailComponent},
  {path:'' ,redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
