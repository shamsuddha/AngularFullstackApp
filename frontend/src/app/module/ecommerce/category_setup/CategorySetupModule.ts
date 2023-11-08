import { NgModule } from "@angular/core";
import { CategorySetupComp } from "./CategorySetupComp";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    CategorySetupComp
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategorySetupComp,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
  ],

  providers: [

  ],
})
export class CategorySetupModule { }
