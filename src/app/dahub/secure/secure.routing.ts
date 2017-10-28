import {RouterModule, Routes} from "@angular/router";
import {SecureComponent} from "./secure.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '', component: SecureComponent,
    children:[
      {path:'', component: LoginComponent},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'reset-password', component: ResetPasswordComponent}
    ]
  }
];

export const secureRouting: ModuleWithProviders = RouterModule.forChild(routes);
