import { RouterModule, Routes } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


export const routes: Routes = [
    {path: '', redirectTo:'/dahub', pathMatch: 'full'},
    {path: '**', redirectTo: '/dahub/errors'}
  //{path: '', component: DashboardComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false, enableTracing: true});
