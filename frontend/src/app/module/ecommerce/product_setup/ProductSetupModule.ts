import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductSetupComp } from "./ProductSetupComp";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
      ProductSetupComp
    ],
    
  imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: ProductSetupComp,
        },
      ]),
      FormsModule,
      ReactiveFormsModule,
      RxReactiveFormsModule,
      NgSelectModule,
      HttpClientModule,
    ],

  providers: [
    
  ],
})
export class ProductSetupModule { }
