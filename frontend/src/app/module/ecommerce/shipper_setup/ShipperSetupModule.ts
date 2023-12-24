import { NgModule } from "@angular/core";
import { ShipperSetupComp } from "./ShipperSetupComp";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    ShipperSetupComp
  ],

  imports:  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShipperSetupComp,
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [
  ],
})
export class ShipperSetupModule { }
