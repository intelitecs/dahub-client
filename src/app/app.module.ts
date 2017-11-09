import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import {
  MatButtonModule, MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule, MatMenuModule, MatDialogModule, MatDialogRef
} from "@angular/material";

  import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {DahubMenuComponent} from './menu/menu.component';
import {appRouting} from "./app.routing";
import {DashboardModule} from "./dahub/dashboard/dashboard.module";
import {DahubModule} from "./dahub/dahub.module";
import {ErrorsModule} from "./dahub/errors/errors.module";
import {HomeModule} from "./dahub/home/home.module";
import {CnpsModule} from "./dahub/administrations/cnps/cnps.module";
import {AdminModule} from "./dahub/admin/admin.module";
import {SecureModule} from "./dahub/secure/secure.module";
import {HelperModule} from "./dahub/helper/helper.module";
import {AppService} from "./app.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
//import {LocalStorageService} from "ngx-webstorage/dist/services";
import {LocalStorageService} from "ngx-webstorage";
import {environment} from "../environments/environment";

export interface RESTConfig{
  REST_SERVER_HOST: string;
  APP_ID: string;
  APP_SECRET: string;
}

export const APPCONFIG:RESTConfig = {
  REST_SERVER_HOST: environment.production ? 'https://dahub.herokuapp.com' : 'http://localhost:5000',
  APP_ID: '1',
  APP_SECRET:'imhotep'
};



@NgModule({
  id: 'app-module',
  declarations: [
    AppComponent, DahubMenuComponent
  ],
  imports: [
    appRouting,HomeModule, DashboardModule, DahubModule,
    ErrorsModule, CnpsModule, AdminModule,
    BrowserModule, BrowserAnimationsModule,
    MatSidenavModule,RouterModule, SecureModule,
    HelperModule, MatButtonModule,MatToolbarModule,
    MatIconModule, MatListModule, MatMenuModule,
    MatDialogModule, HttpClientModule

  ],
  exports:[

  ],
  providers: [
    AppService,
    LocalStorageService,


    {
      provide: 'AppConfig', useValue: APPCONFIG
    },
    { provide: LOCALE_ID, useValue: "fr-FR" },


  ],



  bootstrap: [AppComponent]
})
export class AppModule { }
