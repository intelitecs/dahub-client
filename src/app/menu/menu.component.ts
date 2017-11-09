import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "../dahub/secure/login/login.component";
import {RegisterComponent} from "../dahub/secure/register/register.component";
import {AppService} from "../app.service";
import {LocalStorageService} from "ngx-webstorage";


@Component({
    moduleId: 'app-module',
    selector: 'dahub-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class DahubMenuComponent  implements OnInit{
   public username: string = "";
   public logged_in: boolean = false;

   constructor(private appService: AppService, private localStorageService: LocalStorageService){

   }
    @Output()
    sidenav = new EventEmitter<boolean>();

    toggleSidenav(){
        this.sidenav.emit(true);
    }

    ngOnInit(){
      this.localStorageService.observe('username').subscribe((name) =>{
        this.username = name;
      });

      this.localStorageService.observe('logged_in').subscribe((logged_in) =>{
        this.logged_in = logged_in;
      })
    }

    openLoginForm(){
      this.appService.login("Authentification", "Renseignez vos identifiants pour connecter");
    }
    openRegisterForm(){
      this.appService.register("Inscription", "Renseignez le formulaire suivant pour vous inscrire.");
    }

    processLogout(){
      this.localStorageService.clear("token");
      this.localStorageService.clear("username");
      this.localStorageService.clear("user_id");
      this.localStorageService.store('logged_in', false);
    }
}
