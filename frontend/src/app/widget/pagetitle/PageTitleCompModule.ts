import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTitleComp} from "./PageTitleComp";

@NgModule({
  declarations: [
    PageTitleComp
  ],
  imports: [
    CommonModule,
  ],
  exports: [PageTitleComp]
})
export class PageTitleCompModule {
}
