import {DahubDialogComponent} from "./dialog.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
export const routes: Routes = [
  {
    path: '', component:DahubDialogComponent,
    children:[

    ]
  }
];

export const dialogRouting: ModuleWithProviders = RouterModule.forChild(routes);
