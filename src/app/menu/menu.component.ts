import { Component, EventEmitter, Output } from "@angular/core";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../dahub/secure/login/login.component";
import {RegisterComponent} from "../dahub/secure/register/register.component";
import {AppService} from "../app.service";


@Component({
    moduleId: 'app-module',
    selector: 'dahub-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class DahubMenuComponent {

   constructor(private appService: AppService){

   }
    @Output()
    sidenav = new EventEmitter<boolean>();

    toggleSidenav(){
        this.sidenav.emit(true);
    }

    openLoginForm(){
      this.appService.login("Login", "Login");
    }
    openRegisterForm(){
      this.appService.register("Register", "Register");
    }
}
