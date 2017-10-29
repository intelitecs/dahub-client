import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {cnpsRouting} from "./cnps.routing";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CnpsComponent} from "./cnps.component";
import {EmployeesListComponent} from "./components/employees/employees-list/employees-list.component";
import {EmployeeComponent} from "./components/employees/employee/employee.component";
import {EmployeeFormComponent} from "./components/employees/employee-form/employee-form.component";

@NgModule({
  id: 'app-cnps',
  imports:[
    CommonModule,cnpsRouting
  ],
  exports:[

  ],
  declarations:[
    CnpsComponent, DashboardComponent, EmployeesListComponent,
    EmployeeComponent, EmployeeFormComponent
  ],
  providers:[

  ],
  entryComponents:[

  ],
  bootstrap:[
    DashboardComponent
  ]
})

export class CnpsModule{

}
