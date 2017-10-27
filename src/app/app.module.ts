import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatSidenavModule,
  MatIconModule, MatListModule, MatMenuModule} from "@angular/material";

import { AppComponent } from './app.component';
import {DahubMenuComponent} from './menu/menu.component';

@NgModule({
  id: 'app-module',
  declarations: [
    AppComponent, DahubMenuComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatSidenavModule,
    MatButtonModule,MatToolbarModule, MatIconModule, MatListModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
