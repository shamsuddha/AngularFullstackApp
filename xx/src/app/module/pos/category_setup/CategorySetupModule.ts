import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CategorySetupComp } from "./CategorySetupComp";
import { CategoryRoutes } from "./CategoryRoute";

@NgModule({
  declarations: [
    CategorySetupComp
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    CategoryRoutes
  ],

  providers: [
  ],
})
export class CategorySetupModule { }
