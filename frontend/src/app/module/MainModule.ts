import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MainModuleComp } from './MainModuleComp';
import { MainModuleRoute } from './MainModuleRoute';


@NgModule({
  declarations: [
    MainModuleComp
  ],
  imports: [
    CommonModule, 
    MainModuleRoute
  ],
  providers: [],
})
export class MainModule { }
