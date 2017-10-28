import {RouterModule, Routes} from "@angular/router";
import {DahubComponent} from "./dahub.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [


  {
    path: 'dahub',
    component: DahubComponent,
    children:[
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', loadChildren: 'app/dahub/dashboard/dashboard.module#DashboardModule'},
      {path: 'errors', loadChildren: 'app/dahub/errors/errors.module#ErrorsModule'}
      /*
      {path: 'cnps', loadChildren: 'app/dahub/cnps/cnps.module#CNPSModule'},
      {path: 'countries', loadChildren: 'app/dahub/countries/countries.module#CountryModule'},
      {path: 'dacloud', loadChildren: 'app/dahub/dacloud/dacloud.module#DacloudModule'},
      {path: 'dabilling', loadChildren: 'app/dahub/dabilling/dabilling.module#DaBillingModule'},
      {path: 'secure1', loadChildren: 'app/dahub/authentication/authentication.module#AuthenticationModule'},
      {path: 'secure', loadChildren: 'app/dahub/dialog/dialog.module#DahubDialogModule'}, */
      //{path: 'errors', loadChildren: 'app/dahub/errors/errors.module#ErrorsModule'},
    ]

  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);