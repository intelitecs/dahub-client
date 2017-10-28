import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule, MatMenuModule} from "@angular/material";

  import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {DahubMenuComponent} from './menu/menu.component';
import {appRouting} from "./app.routing";
import {DashboardModule} from "./dahub/dashboard/dashboard.module";
import {DahubModule} from "./dahub/dahub.module";
import {ErrorsModule} from "./dahub/errors/errors.module";
import {HomeModule} from "./dahub/home/home.module";
import {CnpsModule} from "./dahub/administrations/cnps/cnps.module";


@NgModule({
  id: 'app-module',
  declarations: [
    AppComponent, DahubMenuComponent
  ],
  imports: [
    appRouting,HomeModule, DashboardModule, DahubModule, ErrorsModule, CnpsModule,
    BrowserModule, BrowserAnimationsModule, MatSidenavModule,RouterModule,
    MatButtonModule,MatToolbarModule, MatIconModule, MatListModule, MatMenuModule,

  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
