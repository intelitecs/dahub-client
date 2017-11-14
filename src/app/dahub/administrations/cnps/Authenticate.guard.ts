
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {SecureService} from "../../secure/secure.service";

@Injectable()
export class AuthenticateGuard implements CanActivate{

  constructor(private secureService: SecureService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.secureService.isLoggedIn();
  }

}
