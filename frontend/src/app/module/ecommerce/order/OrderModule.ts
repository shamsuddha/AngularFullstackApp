import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { OrderComp } from "./OrderComp";
import { OrderDtoApiService } from "../Dto_Api_Services/OrderDtoApiService";

@NgModule({
  declarations:
  [
    OrderComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComp,
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
export class OrderModule {}
