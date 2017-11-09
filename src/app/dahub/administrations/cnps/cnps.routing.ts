import {RouterModule, Routes} from "@angular/router";
import {CnpsComponent} from "./cnps.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {EmployeesListComponent} from "./components/employees/employees-list/employees-list.component";
import {CompanyComponent} from "./components/company/company.component";

export const routes: Routes = [
  {
    path: '', component:CnpsComponent,
    children:[
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'personnel', component:  EmployeesListComponent},
      {path: 'situation', component:  CompanyComponent},
    ]
  }
];

export const cnpsRouting: ModuleWithProviders = RouterModule.forChild(routes);
