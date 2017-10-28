import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {adminRouting} from "./admin.routing";
import { ProfilesManagerComponent } from './components/profiles-manager/profiles-manager.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { CountriesManagerComponent } from './components/countries-manager/countries-manager.component';
import { CytiesManagerComponent } from './components/cyties-manager/cyties-manager.component';
import { RolesManagerComponent } from './components/roles-manager/roles-manager.component';

@NgModule({
  id: 'app-admin',
  imports:[CommonModule, RouterModule, adminRouting],
  exports:[],
  providers:[],
  declarations:[AdminComponent, DashboardComponent, ProfilesManagerComponent, UsersManagerComponent, CountriesManagerComponent, CytiesManagerComponent, RolesManagerComponent],
  entryComponents:[],
  bootstrap:[AdminComponent]
})

export class AdminModule{

}
