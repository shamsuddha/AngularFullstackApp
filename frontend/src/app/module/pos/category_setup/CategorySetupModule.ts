import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgSelectModule } from "@ng-select/ng-select";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CategorySetupComp } from "./CategorySetupComp";

@NgModule({
  declarations: [
    CategorySetupComp
  ],


  providers: [
  ],
})
export class CategorySetupModule { }
