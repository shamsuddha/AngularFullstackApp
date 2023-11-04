import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeacherComp } from "./TeacherComp";
import { TeacherDtoApiService } from "../Dto_Api_Services/TeacherDtoApiService";

@NgModule({
  declarations:
  [
    TeacherComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TeacherComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    TeacherDtoApiService
  ],
})
export class TeacherModule {}
