import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:[
      {path: '', component: DashboardComponent, pathMatch: 'full'}
    ]
  }
];

export const adminRouting : ModuleWithProviders = RouterModule.forChild(routes);
