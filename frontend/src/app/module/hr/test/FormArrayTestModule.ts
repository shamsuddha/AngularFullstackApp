import { NgModule } from "@angular/core";
import { FormArrayTest2Comp } from "./FormArrayTestComp";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

@NgModule({
  declarations: [
    
    FormArrayTest2Comp
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: FormArrayTest2Comp}]),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  providers: []
})
export class FormArrayTestModule {
}