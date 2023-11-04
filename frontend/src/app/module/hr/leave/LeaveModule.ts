import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LeaveComp } from "./LeaveComp";
import { LeaveDtoApiService } from "../Dto_Api_Services/LeaveDtoApiService";

@NgModule({
  declarations:
  [
    LeaveComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeaveComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    LeaveDtoApiService
  ],
})
export class LeaveModule {}
