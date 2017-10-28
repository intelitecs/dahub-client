import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {cnpsRouting} from "./cnps.routing";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CnpsComponent} from "./cnps.component";

@NgModule({
  id: 'app-cnps',
  imports:[
    CommonModule,cnpsRouting
  ],
  exports:[

  ],
  declarations:[
    CnpsComponent, DashboardComponent
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
