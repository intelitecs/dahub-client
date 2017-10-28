import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {ErrorsComponent} from "./errors.component";
import {errorsRouting} from "./errors.routing";

@NgModule({
  id: 'errors',
  imports: [
    CommonModule, errorsRouting
  ],
  declarations: [ErrorsComponent,NotFoundComponent]
})
export class ErrorsModule { }
