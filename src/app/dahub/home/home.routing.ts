import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(routes);


