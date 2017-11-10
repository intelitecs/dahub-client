import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SecureService} from "../secure.service";
import {LocalStorageService} from "ngx-webstorage";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  moduleId: 'app-secure',
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public message: string;
  public loginForm: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public logged_in: boolean = false;


  constructor(public dialogRef: MatDialogRef<LoginComponent>, private localStorageService: LocalStorageService, private fb: FormBuilder, private router: Router, private secureService: SecureService) {
    this.loginForm = this.fb.group({
      "email":["", [Validators.required]],
      "password":["", [Validators.required]],
    });


  }

  ngOnInit() {
    this.initLoginForm();
    if(this.logged_in){
      this.clearStorage();
    }
  }

  initLoginForm(){
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  clearStorage(){
    this.localStorageService.clear("token");
    this.localStorageService.clear("username");
    this.localStorageService.clear("user_id");
  }

  processLogin(user){
    console.log("login data: ", user);
    this.secureService.login(user).subscribe((response) => {
      console.log("response of login: ", response);
      const token =response['auth_token'];
      const user_id = response['user_id'];
      const username = response['username'];
      if (token){
        this.localStorageService.store('token',token);
        this.logged_in =true;
        this.localStorageService.store('logged_in', this.logged_in);
      }
      if (user_id){
        this.localStorageService.store('user_id', user_id);
      }
      if (username){
        this.localStorageService.store('username', username);
      }




    });
  }



}
