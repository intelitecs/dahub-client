
import {MatDialog, MatDialogRef} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import { DahubConfirmationDialogComponent} from "./confirmation/confirmation.dialog.component";
import {Router} from "@angular/router";


@Injectable()
export class DialogService {

  constructor(private dialog: MatDialog, private router: Router) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DahubConfirmationDialogComponent>;
    dialogRef = this.dialog.open(DahubConfirmationDialogComponent, {
      height: "250px", width: "650px",
      position: { top: "30px", left: "120px" }
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;
    return dialogRef.afterClosed();
  }





}
