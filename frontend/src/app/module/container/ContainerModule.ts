import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerModuleRoute } from "./ContainerModuleRoute";
import { ContainerModuleComp } from "./ContainerModuleComp";
import { HeaderComp } from "./header/HeaderComp";
import { TopMenuComp } from "./header/top_menu/TopMenuComp";
import { MainMenuComp } from "./header/main_menu/MainMenuComp";
import { ProductComp } from "./product/ProductComp";
import { SearchComp } from "./product/search/SearchComp";
import { FormsModule } from "@angular/forms";
import { FilterComp } from "./product/filter/FilterComp";

@NgModule({
  declarations: [
    ContainerModuleComp,
    HeaderComp,
    TopMenuComp,
    MainMenuComp,
    ProductComp,
    SearchComp,
    FilterComp
  ],
  imports: [
    CommonModule, 
    ContainerModuleRoute,
    FormsModule
  ],
  providers: [],
})
export class ContainerModule { }