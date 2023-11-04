import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PostComp } from "./PostComp";
import { PostDtoApiService } from "../Dto_Api_Services/PostDtoApiService";

@NgModule({
  declarations:
  [
    PostComp
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    PostDtoApiService
  ],
})
export class PostModule {}
