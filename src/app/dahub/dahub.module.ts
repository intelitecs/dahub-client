import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DahubComponent} from "./dahub.component";

import {RouterModule} from "@angular/router";
import {routing} from "./dahub.routing";




@NgModule({
  id: 'dahub',
  declarations:[DahubComponent],
  imports:[
    CommonModule,routing, RouterModule
  ],
  exports:[
     RouterModule
  ]
})

export class DahubModule{

}
