import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductComp } from "./ProductComp";
import { ProductDtoApiService } from "../Dto_Api_Services/ProductDtoApiService";

@NgModule({
  declarations:
  [
    ProductComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    ProductDtoApiService
  ],
})
export class ProductModule {}
