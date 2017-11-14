import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CnpsService} from '../../../cnps.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee: FormGroup;
  currentControlName: string;
  instructions: Array<string> = [];
  messages: Array<any> = [];
  title: string;
  birthdate: AbstractControl;
  birthplace: AbstractControl;
  lastname: AbstractControl;
  firstname: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  mobilePhone: AbstractControl;


  constructor(private fb: FormBuilder, private router: Router, private cnpsService: CnpsService) {
    this.employee = this.fb.group({
      birthdate: ['', Validators.compose([Validators.required])],
      birthplace: ['',Validators.compose([Validators.maxLength(20)])],
      firstname: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
      lastname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: ['', Validators.compose([Validators.required])],
      mobilePhone: ['', Validators.compose([Validators.required])]

    });
  }

  ngOnInit() {
    this.initEmployeeForm();
    this.validateEmployeeForm();
    this.initMessages();

  }

  initEmployeeForm() {
    this.birthplace = this.employee.controls['birthplace'];
    this.birthdate = this.employee.controls['birthdate'];
    this.email = this.employee.controls['email'];
    this.firstname = this.employee.controls['firstname'];
    this.lastname = this.employee.controls['lastname'];
    this.phone = this.employee.controls['phone'];
    this.mobilePhone = this.employee.controls['mobilePhone'];

  }


  public showInstructions(controlName: string){
    this.currentControlName = controlName;
    switch(controlName){

      case 'birthdate':

        this.instructions.push('La date de naissance est obligatoire');
        this.instructions.push('Le format de date est jj-mm-aaaa');
        break;
      case 'birthplace':
        this.instructions.push('Le lieu de naissance est obligatoire');
        break;
      case 'firstname':
        this.instructions.push('La liste de prénoms séparés par des espaces est obligatoire');
        this.instructions.push('La longueur maximale est de 26 caractères');
        break;
      case 'lastname':
        this.instructions.push('Le nom est obligatoire');
        this.instructions.push('La longueur maximale est de 18 caractères');
        break;
      case 'email':
        this.instructions.push('adresse email est obligatoire');
        this.instructions.push('adresse email doit être une adresse valide');
        break;
      case 'phone':
        this.instructions.push('Le numéro de téléphone est obligatoire');
        this.instructions.push('Le format du numéro de téléphone est +225 20 10 20 10 ou 20 10 20 10 ou 20-10-20-10');
        break;
      case 'mobilePhone':
        this.instructions.push('Le numéro de téléphone mobile est obligatoire');
        this.instructions.push('Le format du numéro de téléphone est +225 20 10 20 10 ou 20 10 20 10 ou 20-10-20-10');
        break;
      case 'address':
        this.instructions.push('adresse physique est obligatoire');
        break;
      default:
        this.instructions = [];
        break;
    }
  }

  public initMessages(){
    const  lastnameMsg = {};
    const  lastnameErrors = [];
    lastnameMsg['control'] = this.lastname;
    lastnameMsg['information']= ['Le nom est obligatoire','La longueur maximale est de 18 caractères'];
    const lastnameRequiredError = {'type': 'required', 'msg':'Le nom est obligatoire'};
    const lastnameMaxLengthError = {'type': 'maxLength', 'msg':'La longueur maximale est de 18 caractères'};
    lastnameErrors.push(lastnameRequiredError);
    lastnameErrors.push(lastnameMaxLengthError);
    lastnameMsg['errors'] = lastnameErrors;
    this.messages.push(lastnameMsg);

    const firstnameMsg = {};
    const firstnameErrors = [];
    firstnameMsg['control'] = this.firstname;
    firstnameMsg['information'] = ['Le prénom est obligatoire.','Si vous en avez plusieurs, séparez-les par des espaces']
    const firstnameRequiredError = {'type': 'required', 'msg':'Le prénom est obligatoire'};
    const firstnameMaxLengthError = {'type': 'maxLength', 'msg':'La longueur maximale est de 26 caractères'};
    firstnameErrors.push(firstnameRequiredError);
    firstnameErrors.push(firstnameMaxLengthError);
    firstnameMsg['errors'] = firstnameErrors;
    this.messages.push(firstnameMsg);

  }

  public resetInstructions() {
    this.instructions = [];
  }

  validateEmployeeForm() {
    $('#instructions, .instruction-phrase').css({'color': 'blue'});
    $('#instructions h3').css({'color':'blue'});
    $('.form-panel').css({'background': 'rgba(145, 168, 164, 0.2)', width: '700px'});
    $('label').css({'text-transform': 'uppercase', color: 'blue'});
    const ul = $('ul');
    this.instructions.forEach((instruction) => {
      const li = $('li');
      $(li).append(instruction);
      $('#instructions').append(li);
    });


  }

  backToEmployees(){
    this.router.navigate(['/administrations/cnps/personnel']);
  }

  processEmployeeCreation(values){
    console.log(values);
  }

}
