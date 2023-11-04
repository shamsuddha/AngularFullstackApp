import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CategoryComp } from "./CategoryComp";
import { CategoryDtoApiService } from "../Dto_Api_Services/CategoryDtoApiService";

@NgModule({
  declarations:
  [
    CategoryComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    CategoryDtoApiService
  ],
})
export class CategoryModule {}
