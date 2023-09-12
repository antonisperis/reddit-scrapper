import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    UserLoginComponent,
    UserSignupComponent
  ]
})
export class LoginModule { }
