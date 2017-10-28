import {RouterModule, Routes} from "@angular/router";
import {ErrorsComponent} from "./errors.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '', component: ErrorsComponent,
    children:[
      {
        path: 'not-found', component: NotFoundComponent
      }
    ]
  }
];

export const errorsRouting: ModuleWithProviders = RouterModule.forChild(routes);
