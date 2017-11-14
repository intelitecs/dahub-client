import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {cnpsRouting} from "./cnps.routing";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CnpsComponent} from "./cnps.component";
import {EmployeesListComponent} from "./components/employees/employees-list/employees-list.component";
import {EmployeeComponent} from "./components/employees/employee/employee.component";
import {EmployeeFormComponent} from "./components/employees/employee-form/employee-form.component";
import {
  MatButtonModule, MatButtonToggleModule, MatDatepickerModule, MatIconModule, MatTableModule,
  MatTabsModule
} from "@angular/material";
import {LoadingModule} from 'ngx-loading';
import { CompanyComponent } from './components/company/company.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CnpsService} from "./cnps.service";
import {AuthenticateGuard} from "./Authenticate.guard";

@NgModule({
  id: 'app-cnps',
  imports:[
    CommonModule, cnpsRouting, MatTabsModule, ReactiveFormsModule,
    FormsModule, MatButtonModule, MatButtonToggleModule,
    MatDatepickerModule, MatTableModule, MatIconModule, LoadingModule
  ],
  exports:[

  ],
  declarations:[
    CnpsComponent, DashboardComponent, EmployeesListComponent,
    EmployeeComponent, EmployeeFormComponent, CompanyComponent
  ],
  providers:[
    CnpsService,
    AuthenticateGuard
  ],
  entryComponents:[

  ],
  bootstrap:[
    DashboardComponent
  ]
})

export class CnpsModule{

}
