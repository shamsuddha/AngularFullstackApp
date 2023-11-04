import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EmployeeComp } from "./EmployeeComp";
import { EmployeeDtoApiService } from "../Dto_Api_Services/EmployeeDtoApiService";

@NgModule({
  declarations:
  [
    EmployeeComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    EmployeeDtoApiService
  ],
})
export class UserModule {}
