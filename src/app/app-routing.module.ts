import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/components/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { VerifyEmailComponent } from './auth/components/verify-email/verify-email.component';
import { CartsComponent } from './cart/components/carts/carts.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:'products',component:AllProductsComponent},
  {path:'cart',component:CartsComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'varify-email',component:VerifyEmailComponent},
  {path:'' ,redirectTo:'products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
