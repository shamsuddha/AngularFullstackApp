import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderInfoDetailSetupComp } from "./OrderInfoDetailSetupComp";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations:
  [
    OrderInfoDetailSetupComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderInfoDetailSetupComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],

  providers: [
    
  ],
})
export class OrderInfoDetailSetupModule {}
