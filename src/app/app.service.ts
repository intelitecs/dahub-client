import {Inject, Injectable} from "@angular/core";
import {RegisterComponent} from "./dahub/secure/register/register.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {LoginComponent} from "./dahub/secure/login/login.component";


@Injectable()
export class AppService{
  constructor(public dialog: MatDialog){

  }
  public showLoginForm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<LoginComponent>;
    dialogRef = this.dialog.open(LoginComponent, {
      height: "500px", width: "700px",
      position: { top: "30px", left: "120px" }

    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;


    return dialogRef.afterClosed();

  }

  public showRegisterForm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<RegisterComponent>;
    dialogRef = this.dialog.open(RegisterComponent, {
      height: "500px", width: "900px",
      position: {top: "30px", left: "120px"}

    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

}
