import {MatDialog, MatDialogRef} from "@angular/material";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {LoginComponent} from "./dahub/secure/login/login.component";
import {RegisterComponent} from "./dahub/secure/register/register.component";

@Injectable()
export class AppService{
  constructor(private dialog: MatDialog){}

  public login(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<LoginComponent>;
    dialogRef = this.dialog.open(LoginComponent, {
      height: "400px", width: "700px",
      position: { top: "30px", left: "120px" }

    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;


    return dialogRef.afterClosed();

  }

  public register(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<RegisterComponent>;
    dialogRef = this.dialog.open(RegisterComponent, {
      height: "450px", width: "900px",
      position: {top: "30px", left: "120px"}

    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

}
