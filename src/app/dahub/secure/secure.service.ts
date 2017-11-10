import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {MatDialog, MatDialogRef} from "@angular/material";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

@Injectable()
export class SecureService{
  private REST_SERVER_HOST: string = this.AppConfig.REST_SERVER_HOST;
  private sessionsEndPoint: string = this.REST_SERVER_HOST+"/login.json";
  private companiesEndPoint: string = this.REST_SERVER_HOST+"/companies.json";

  constructor(@Inject("AppConfig") private AppConfig, private http: HttpClient, private dialog: MatDialog){}

  login(user: any): Observable<any>{
    return  this.http.post(this.sessionsEndPoint, user);
  }

  register(company: any) : Observable<any>{
    return this.http.post(this.companiesEndPoint, company);
  }







}
