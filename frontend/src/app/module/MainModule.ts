import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MainModuleComp } from "./MainModuleComp";
import { MainModuleRoute } from "./MainModuleRoute";
import { FormArrayTestComp } from "./FormArrayTestComp";

@NgModule({
  declarations: [
    MainModuleComp
  ],
  imports: [
    CommonModule,
    MainModuleRoute,
  ],
  providers: [
  
  ],
})
export class MainModule { }