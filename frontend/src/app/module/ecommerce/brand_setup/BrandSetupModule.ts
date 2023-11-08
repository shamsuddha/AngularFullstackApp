import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrandSetupComp } from "./BrandSetupComp";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
    BrandSetupComp
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BrandSetupComp,
      },
    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],

  providers: [

  ],
})
export class BrandSetupModule { }
