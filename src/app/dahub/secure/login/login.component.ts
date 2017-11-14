import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SecureService} from "../secure.service";
import {LocalStorageService} from "ngx-webstorage";
import {MatDialogRef} from "@angular/material/dialog";
import {DialogService} from "../../dialog/dialog.services";


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
  public loading: boolean = false;


  constructor(public dialogRef: MatDialogRef<LoginComponent>, private localStorageService: LocalStorageService, private fb: FormBuilder, private router: Router,
              private secureService: SecureService, private dialogService: DialogService) {
    this.loginForm = this.fb.group({
      "email":["", [Validators.required]],
      "password":["", [Validators.required]],
    });


  }



  ngOnInit() {
    if(this.logged_in){
      this.clearStorage();
    }
    this.initLoginForm();

  }

  closeDialogOK(){
    this.dialogRef.close(true);
  }

  closeDialogCancel(){
    this.dialogRef.close(false);
  }

  initLoginForm(){
    this.email = this.loginForm.controls['email'];
    this.password = this.loginForm.controls['password'];
  }

  clearStorage(){
    this.localStorageService.clear("token");
    this.localStorageService.clear("username");
    this.localStorageService.clear("user_id");
    this.localStorageService.clear("logged_in");
  }

  processLogin(user){
    console.log("user: ", user);
    this.loading = true;
    this.secureService.login(user).subscribe((response) =>{
      this.loading = false;
      const token =response['auth_token'];
      const user_id = response['user_id'];
      const username = response['username'];
      if(token && user_id && username){
        this.localStorageService.store('token',token);
        this.logged_in = true;
        this.localStorageService.store('logged_in', this.logged_in);
        this.localStorageService.store('username', username);
        this.localStorageService.store('user_id', user_id);
      }else {
        this.logged_in = false;
      }
    });
  }



}
