import {NgModule} from "@angular/core";
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatCommonModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatSelectModule
} from "@angular/material";
import {CommonModule} from "@angular/common";
import {DahubDialogComponent} from "./dialog.component";
import {DialogService} from "./dialog.services";
import { DahubConfirmationDialogComponent} from "./confirmation/confirmation.dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {dialogRouting} from "./dialog.routing";

@NgModule({
  id: "dahub-dialog",
  imports: [
    MatCommonModule, CommonModule, MatDialogModule, MatButtonModule, FormsModule, RouterModule, ReactiveFormsModule, MatInputModule,
    MatSelectModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatAutocompleteModule, dialogRouting
  ],
  declarations: [
    DahubDialogComponent,
    DahubConfirmationDialogComponent
  ]
  ,
  exports: [
    DahubDialogComponent,
    DahubConfirmationDialogComponent,
  ],
  providers: [
    DialogService,
  ],
  entryComponents: [
    DahubDialogComponent,
    DahubConfirmationDialogComponent,
  ]

})

export class DahubDialogModule {

}
