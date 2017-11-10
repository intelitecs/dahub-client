import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

@Injectable()
export class CommonService {
  private REST_SERVER_HOST: string = this.AppConfig.REST_SERVER_HOST;
  private countriesEndPoint: string = this.REST_SERVER_HOST+"/countries.json";
  private juridic_formsEndPoint: string = this.REST_SERVER_HOST+"/juridic_forms.json";
  private companiesEndpoint: string = this.REST_SERVER_HOST+ "/companies.json";
  private usersEndpoint: string = this.REST_SERVER_HOST+ "/users.json";

  constructor(@Inject("AppConfig") private AppConfig, private http: HttpClient) { }

  public getCountries(): Observable<any>{
    return this.http.get(this.countriesEndPoint);
  }

  public getJuridicForms() : Observable<any>{
    return this.http.get(this.juridic_formsEndPoint);
  }

  public getJuridicFormByName(name, forms) {
    return forms.filter((form) =>{
      return form.name == name;
    });
  }

  public getCountryByName(name, countries) {
    return countries.filter((country) =>{
      return country.name == name;
    });
  }

  public createCompany(company): Observable<any>{
    return this.http.post(this.companiesEndpoint, company);
  }

  public createUser(user): Observable<any>{
    return this.http.post(this.usersEndpoint, user);
  }
}
