import { RouterModule, Routes } from "@angular/router";
import {ModuleWithProviders} from "@angular/core";


export const routes: Routes = [
    {path: '', redirectTo:'/', pathMatch: 'full'},
    {path: '**', redirectTo: '/errors'}

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false, enableTracing: true});
