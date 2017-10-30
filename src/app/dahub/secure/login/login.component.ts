import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
  public username: AbstractControl;
  public password: AbstractControl;
  public userProfile: AbstractControl;

  public userProfiles: Array<any> = [{type: "company", value: "Employeur"}, {type: "employee", value: "Employé"}];

  constructor(public dialogRef:MatDialogRef<LoginComponent>, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      "username":["", [Validators.required]],
      "password":["", [Validators.required]],
      "userProfile":["", []],
    });


  }

  ngOnInit() {
    this.initLoginForm();
  }

  initLoginForm(){
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
    this.userProfile = this.loginForm.controls['userProfile'];
  }

  processLogin(data){
    console.log("login data: ", data);
  }

}
