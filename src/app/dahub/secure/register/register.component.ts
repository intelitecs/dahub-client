import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmailValidator, EqualPasswordsValidator} from "../../../app.validators";

@Component({
  moduleId: 'app-secure',
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title: string;
  public message: string;

  public country: AbstractControl;
  public company: FormGroup;
  public password: AbstractControl;
  public password_confirmation: AbstractControl;
  public socialReason: AbstractControl;
  public form: AbstractControl;
  public email: AbstractControl;
  public passwords: FormGroup;
  public companyTypes: Array<any> = [];
  public submitted = false;
  stateCtrl: FormControl;
  countryCtrl: FormControl;
  filteredStates: any;
  filteredCountries: any;
  public countries: Array<any> = [];
  public userProfile;
  pageTitle = "Inscription sur Dahub Admin";

  constructor(public dialogRef: MatDialogRef<RegisterComponent>,
              private fb: FormBuilder, private router: Router) {
    this.company = fb.group({
      'country': ['', Validators.required],
      'socialReason': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'form': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'password_confirmation': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'password_confirmation')})
    });
  }

  ngOnInit() {
    this.initCompanyTypes();
    this.initRegisterForm();
  }
  initCompanyTypes(){
    this.companyTypes.push({'code': 'SI', 'designation': 'Société Individuelle'});
    this.companyTypes.push({'code': 'SARL', 'designation': 'Société A Responsabilité Limité'});
    this.companyTypes.push({'code': 'SA', 'designation': 'Société Anonyme'});
    //this.loadAllCountries();
  }

  initRegisterForm(){
    this.country = this.company.controls['country'];
    this.socialReason = this.company.controls['socialReason'];
    this.form =  this.company.controls['form'];
    this.email =  this.company.controls['email'];
    this.passwords = <FormGroup> this.company.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.password_confirmation = this.passwords.controls['password_confirmation'];
  }

  public onCountrySelect(country) {
    console.log(country);
  }

  processUserRegistration(data){
    console.log("data: ", data);
  }
}
