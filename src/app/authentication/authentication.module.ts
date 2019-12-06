import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationRoutingModule} from './authentication.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
