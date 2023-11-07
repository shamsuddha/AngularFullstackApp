import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RoleComp } from './role/RoleComp';
import { HrModuleRoute } from './HrModuleRoute';
import { HrModuleComp } from './HrModuleComp';



@NgModule({
  declarations: [
    HrModuleComp
  ],
  imports: [
    CommonModule, 
    HrModuleRoute
  ],
  providers: [],
})
export class HrModule { }
