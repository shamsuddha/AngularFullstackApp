import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommentComp } from "./CommentComp";
import { BrandDtoApiService } from "../Dto_Api_Services/BrandDtoApiService";

@NgModule({
  declarations:
  [
    CommentComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CommentComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    BrandDtoApiService
  ],
})
export class CommentModule {}
