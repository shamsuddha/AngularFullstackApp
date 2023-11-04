import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrandComp } from "./BrandComp";
import { BrandDtoApiService } from "../Dto_Api_Services/BrandDtoApiService";
//import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations:
  [
    BrandComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrandComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   // NgSelectModule
  ],

  providers: [
    BrandDtoApiService
  ],
})
export class BrandModule {}
