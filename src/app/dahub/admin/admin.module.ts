import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {adminRouting} from "./admin.routing";

@NgModule({
  id: 'app-admin',
  imports:[CommonModule, RouterModule, adminRouting],
  exports:[],
  providers:[],
  declarations:[AdminComponent, DashboardComponent],
  entryComponents:[],
  bootstrap:[AdminComponent]
})

export class AdminModule{

}
