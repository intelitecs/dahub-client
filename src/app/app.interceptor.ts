import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {LocalStorageService} from "ngx-webstorage";
import {DialogService} from "./dahub/dialog/dialog.services";
import {Router} from "@angular/router";
import {AppService} from "./app.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

  constructor(private localStorageService: LocalStorageService, private dialogService: DialogService, private router: Router, private appService: AppService){}


  intercept<T> (req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorageService.retrieve('token');

    const url = req.url;
    if (url.includes("login.json") || url.includes("register")){
      return next.handle(req);
    }else {
      if(token == null){
        this.appService.showLoginForm("Accès protégé", "Connectez vous pour accéder à la resource");
      }else{
        req = req.clone({setHeaders:{Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'}});
      }
      return next.handle(req);
    }

  }

}
