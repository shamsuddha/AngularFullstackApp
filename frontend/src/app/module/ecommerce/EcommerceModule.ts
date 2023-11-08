import { NgModule } from "@angular/core";
import { EcommerceModuleComp } from "./EcommerceModuleComp";
import { CommonModule } from "@angular/common";
import { EcommerceModuleRoute } from "./EcommerceModuleRoute";

@NgModule({
  declarations: [
    EcommerceModuleComp
  ],
  imports: [
    CommonModule, 
    EcommerceModuleRoute
  ],
  providers: [],
})
export class EcommerceModule { }