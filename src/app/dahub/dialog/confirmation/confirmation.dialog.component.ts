import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
import {AbstractControl, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation.dialog.component.html',
  styleUrls: ['./confirmation.dialog.component.css']
})

export class DahubConfirmationDialogComponent{
  public title: string;
  public message: string;

  constructor( public dialogRef: MatDialogRef<DahubConfirmationDialogComponent>){

  }
}
