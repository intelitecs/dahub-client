import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  moduleId: 'app-secure',
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

}
