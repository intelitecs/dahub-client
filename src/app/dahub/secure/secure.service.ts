import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SecureService{
  private REST_SERVER_HOST: string = this.AppConfig.REST_SERVER_HOST;
  private sessionsEndPoint: string = this.REST_SERVER_HOST+"/login.json";

  constructor(@Inject("AppConfig") private AppConfig, private http: HttpClient){}

  login(user: any): Observable<any>{
    return  this.http.post(this.sessionsEndPoint, user);
  }
}
