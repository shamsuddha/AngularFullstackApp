import { NgModule } from "@angular/core";
import { BrandComp } from "./brand/BrandComp";
import { CategoryComp } from "./category/CategoryComp";
import { OrderDetailComp } from "./order_detail/OrderDetailComp";
import { OrderInfoComp } from "./order_info/OrderInfoComp";
import { ProductComp } from "./product/ProductComp";
import { CommonModule } from "@angular/common";
import { EcommerceRoutingModule } from "./EcommerceRoutingModule";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
  declarations: [
    BrandComp,
    CategoryComp,
    OrderDetailComp,
    OrderInfoComp,
    ProductComp
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
  ],
  providers: [],
})
export class EcommerceModule { }
