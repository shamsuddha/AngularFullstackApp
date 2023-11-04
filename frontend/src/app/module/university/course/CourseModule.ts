import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CourseComp } from "./CourseComp";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CourseDtoApiService } from "../Dto_Api_Services/CourseDtoApiService";

@NgModule({
  declarations:
  [
    CourseComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CourseComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    CourseDtoApiService
  ],
})
export class CourseModule {}
