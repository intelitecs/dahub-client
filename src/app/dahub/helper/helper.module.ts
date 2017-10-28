import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HelperComponent} from "./helper.component";
import {helperRouting} from "./helper.routing";
import { UsageComponent } from './components/usage/usage.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  id:'app-helper',
  imports: [
    CommonModule, RouterModule, helperRouting
  ],
  exports: [],
  declarations: [HelperComponent, UsageComponent, ContactComponent],
  providers:[],
  entryComponents:[],
  bootstrap:[HelperComponent]
})
export class HelperModule { }
