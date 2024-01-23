import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import {VarifyEmailComponent}  from './components/varify-email/varify-email.component'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VarifyEmailComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[    FormsModule,]
})
export class AuthModule { }
