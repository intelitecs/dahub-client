import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {RouterModule} from "@angular/router";
import {secureRouting} from "./secure.routing";
import {SecureComponent} from "./secure.component";
import {SecureService} from "./secure.service";
import {
  MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule,
  MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  id: 'app-secure',
  imports: [
    CommonModule, RouterModule, secureRouting, MatButtonModule, MatIconModule, MatSelectModule , MatAutocompleteModule, MatFormFieldModule, MatDialogModule, ReactiveFormsModule, FormsModule
  ],
  declarations: [SecureComponent,LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [

  ],

  providers:[SecureService],

  entryComponents:[
    RegisterComponent, LoginComponent
  ],
  bootstrap:[
    SecureComponent
  ],

})
export class SecureModule { }
