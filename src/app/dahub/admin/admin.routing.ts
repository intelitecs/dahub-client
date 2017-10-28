import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {ModuleWithProviders} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CytiesManagerComponent} from "./components/cyties-manager/cyties-manager.component";
import {CountriesManagerComponent} from "./components/countries-manager/countries-manager.component";
import {ProfilesManagerComponent} from "./components/profiles-manager/profiles-manager.component";
import {UsersManagerComponent} from "./components/users-manager/users-manager.component";
import {RolesManagerComponent} from "./components/roles-manager/roles-manager.component";

export const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children:[
      {path: '', component: DashboardComponent, pathMatch: 'full'},
      {path: 'cyties-manager', component: CytiesManagerComponent},
      {path: 'countries-manager', component: CountriesManagerComponent },
      {path: 'profiles-manager', component: ProfilesManagerComponent},
      {path: 'users-manager', component: UsersManagerComponent},
      {path: 'roles-manager', component: RolesManagerComponent},
    ]
  }
];

export const adminRouting : ModuleWithProviders = RouterModule.forChild(routes);
