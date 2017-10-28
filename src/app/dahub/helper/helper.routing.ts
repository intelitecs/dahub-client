import {RouterModule, Routes} from "@angular/router";
import {HelperComponent} from "./helper.component";
import {ModuleWithProviders} from "@angular/core";
import {UsageComponent} from "./components/usage/usage.component";
import {ContactComponent} from "./components/contact/contact.component";

export const routes: Routes = [
  {path: '', component: HelperComponent,
   children:[
     {path: '', component: UsageComponent, pathMatch: 'full'},
     {path: 'usage', component: UsageComponent},
     {path: 'contact', component: ContactComponent}
   ]}
];

export const helperRouting: ModuleWithProviders = RouterModule.forChild(routes);
