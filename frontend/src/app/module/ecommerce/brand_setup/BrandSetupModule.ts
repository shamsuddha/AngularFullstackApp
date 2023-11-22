import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrandSetupComp } from "./BrandSetupComp";
import { NgSelectModule } from "@ng-select/ng-select";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

@NgModule({
  declarations: [
    BrandSetupComp
  ],
  imports:  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrandSetupComp,
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
export class BrandSetupModule { }
