import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StudentComp } from "./StudentComp";
import { StudentDtoApiService } from "../Dto_Api_Services/StudentDtoApiService";

@NgModule({
  declarations:
  [
    StudentComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    StudentDtoApiService
  ],
})
export class StudentModule {}
