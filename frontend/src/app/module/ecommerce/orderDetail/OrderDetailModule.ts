import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderDetailComp } from "./OrderDetailComp";
import { OrderDetailDtoApiService } from "../Dto_Api_Services/OrderDetailDtoApiService";

@NgModule({
  declarations:
  [
    OrderDetailComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderDetailComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    OrderDetailDtoApiService
  ],
})
export class OrderDetailModule {}
