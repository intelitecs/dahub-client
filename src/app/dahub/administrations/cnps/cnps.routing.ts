import {RouterModule, Routes} from "@angular/router";
import {CnpsComponent} from "./cnps.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path: '', component:CnpsComponent,
    children:[
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      }
    ]
  }
];

export const cnpsRouting: ModuleWithProviders = RouterModule.forChild(routes);
