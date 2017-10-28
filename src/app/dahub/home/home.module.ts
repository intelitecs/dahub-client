import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {homeRouting} from "./home.routing";
import {HomeComponent} from "./home.component";

@NgModule({
  id: 'app-home',
  imports:[
    CommonModule, RouterModule, homeRouting
  ],
  declarations:[
    HomeComponent
  ],
  exports:[

  ],
  providers:[

  ],
  bootstrap:[
    HomeComponent
  ],
  entryComponents:[

  ]

})

export class HomeModule{

}
