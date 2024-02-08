import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerModuleRoute } from "./ContainerModuleRoute";
import { ContainerModuleComp } from "./ContainerModuleComp";
import { HeaderComp } from "./header/HeaderComp";
import { TopMenuComp } from "./header/top_menu/TopMenuComp";
import { MainMenuComp } from "./header/main_menu/MainMenuComp";
import { ProductComp } from "./product/ProductComp";

@NgModule({
  declarations: [
    ContainerModuleComp,
    HeaderComp,
    TopMenuComp,
    MainMenuComp,
    ProductComp
  ],
  imports: [
    CommonModule, 
    ContainerModuleRoute
  ],
  providers: [],
})
export class ContainerModule { }