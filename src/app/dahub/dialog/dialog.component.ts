import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material";
@Component({
  moduleId: 'dahub-dialog',
  selector: 'app-confirm-dialog',
  templateUrl: './dialog.component.html'

})

export class DahubDialogComponent{
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<DahubDialogComponent>){

  }
}
