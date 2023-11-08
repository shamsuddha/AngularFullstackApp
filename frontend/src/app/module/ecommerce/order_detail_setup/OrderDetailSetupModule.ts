import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderDetailSetupComp } from "./OrderDetailSetupComp";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations:
  [
    OrderDetailSetupComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderDetailSetupComp,
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
export class OrderDetailSetupModule {}
