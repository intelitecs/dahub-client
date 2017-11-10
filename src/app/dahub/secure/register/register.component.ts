import {Component, Injector, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {EmailValidator, EqualPasswordsValidator} from "../../../app.validators";
import {CommonService} from "../../../common.service";
import "rxjs/add/operator/map";
import {AppService} from "../../../app.service";
import {SecureService} from "../secure.service";
import {DialogService} from "../../dialog/dialog.services";

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
  public selectedCompanyType: any;
  filteredCountries: any;
  public countries: Array<any> = [];
  public selectedCountry: any;
  pageTitle = "Inscription sur Dahub Admin";


  constructor(public dialogRef: MatDialogRef<RegisterComponent>, private dialogService: DialogService,
              private fb: FormBuilder, private router: Router,
              private service: CommonService, private secureService: SecureService) {

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
    this.loadCompanyTypes();
    this.loadCountries();
    this.initRegisterForm();

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

  public onCountrySelect(countryName) {
    console.log(countryName);
    const selectedCountry = this.service.getCountryByName(countryName, this.countries)[0];
    this.selectedCountry = selectedCountry;
    console.log("selected country: ", this.selectedCountry);

  }

 public onCompanyTypeSelect(companyType){
   console.log(companyType);
   const selectedForm = this.service.getJuridicFormByName(companyType, this.companyTypes)[0];
   this.selectedCompanyType = selectedForm;
   console.log("selected form: ", this.selectedCompanyType);
 }

  loadCountries(){
    this.service.getCountries().subscribe((countries) =>{
      console.log("countries: ", countries);
      this.countries = countries;

      this.filteredCountries = this.country.valueChanges.map(name => this.filterCountries(name));
    });
  }

  loadCompanyTypes(){
    this.service.getJuridicForms().subscribe((forms) => {
      console.log("company forms: ", forms);
      this.companyTypes = forms;
    });
  }

  processUserRegistration(values){
    console.log("data: ", values);
    const company = {};
    const user = {};
    company['country_id'] = this.selectedCountry.id;
    company['juridic_form_id'] = this.selectedCompanyType.id;
    company['email'] = values['email'];
    company['socialReason'] = values['socialReason'];
    company['password'] = values['passwords']['password'];
    company['password_confirmation'] = values['passwords']['password_confirmation'];

    console.log("company: ", company);
    console.log("user: ", user);

    this.service.createCompany(company).subscribe((response_company) =>{

      if (response_company){
        this.dialogService.confirm("Inscription", "Votre entreprise a été inscrite avec succès!").subscribe((result) => {
          if(result){
            console.log("created company: ", response_company);
          }
        });
      }
    }, (error) =>{
      console.error(error);
    }, ()=>{
      console.log("Company created with account!")
    });


  }

  filterCountries(name: string){
    return name ? this.countries.filter((country) => country.name.toLowerCase().indexOf(name) === 0 || country.name.indexOf(name)=== 0 ) : this.countries;
  }




}
