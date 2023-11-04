import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DepartmentDtoApiService } from "../Dto_Api_Services/DepartmentDtoApiService";
import { DepartmentComp } from "./DepartmentComp";

@NgModule({
  declarations:
  [
    DepartmentComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DepartmentComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    DepartmentDtoApiService
  ],
})
export class DepartmentModule {}
