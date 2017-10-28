import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {routing} from "./dashboard.routing";
import {

  MatButtonModule, MatCommonModule,
  MatGridListModule, MatIconModule, MatToolbarModule
} from "@angular/material";
@NgModule({
  id: 'dashboard',
  imports: [
    CommonModule,
    MatCommonModule,
    routing,MatButtonModule, MatIconModule,
    MatGridListModule,
    MatButtonModule, MatToolbarModule
  ],
  declarations:[
    DashboardComponent
  ],

  exports:[],
  providers:[]

})

export class DashboardModule{

}
