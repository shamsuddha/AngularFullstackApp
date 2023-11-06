import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderInfoComp } from "./OrderInfoComp";
import { OrderDtoApiService } from "../Dto_Api_Services/OrderDtoApiService";

@NgModule({
  declarations:
  [
    OrderInfoComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderInfoComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    OrderDtoApiService
  ],
})
export class OrderInfoModule {}
