import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LeaveTypeComp } from "./LeaveTypeComp";
import { LeaveTypeDtoApiService } from "../Dto_Api_Services/LeaveTypeDtoApiService";

@NgModule({
  declarations:
  [
    LeaveTypeComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeaveTypeComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    LeaveTypeDtoApiService
  ],
})
export class LeaveTypeModule {}
