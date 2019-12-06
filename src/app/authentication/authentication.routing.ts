import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';



const routes: Routes = [
  {
    path: 'authentication',
    component: LoginComponent
  },
  {
    path: 'authentication/login',
    component: LoginComponent
  },
  {
    path: 'authentication/register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AuthenticationRoutingModule { }
