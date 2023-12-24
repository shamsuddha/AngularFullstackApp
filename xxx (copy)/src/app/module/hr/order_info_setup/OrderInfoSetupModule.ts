import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {OrderInfoSetupComp} from "./OrderInfoSetupComp";
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import {NgSelectModule} from "@ng-select/ng-select";

@NgModule({
  declarations: [
    OrderInfoSetupComp
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderInfoSetupComp,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
})
export class OrderInfoSetupModule {
}
