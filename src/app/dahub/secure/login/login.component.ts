import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";

@Component({
  moduleId: 'app-secure',
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public message: string;
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

}
