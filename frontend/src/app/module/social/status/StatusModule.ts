import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StatusComp } from "./StatusComp";
import { StatusDtoApiService } from "../Dto_Api_Services/StatusDtoApiService";

@NgModule({
  declarations:
  [
    StatusComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StatusComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    StatusDtoApiService
  ],
})
export class StatusModule {}
