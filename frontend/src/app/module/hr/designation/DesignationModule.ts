import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DesignationComp } from "./DesignationComp";
import { DesignationDtoApiService } from "../Dto_Api_Services/DesignationDtoApiService";

@NgModule({
  declarations:
  [
    DesignationComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DesignationComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    DesignationDtoApiService
  ],
})
export class DesignationModule {}
