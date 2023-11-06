import { NgModule } from '@angular/core';
import { HrRoutingModule } from './HrRoutingModule';
import { CommonModule } from '@angular/common';
import { RoleComp } from './role/RoleComp';
import { UserInfoComp } from './user_info/UserInfoComp';


@NgModule({
  declarations: [
    UserInfoComp,
    RoleComp
  ],
  imports: [
    CommonModule, 
    HrRoutingModule
     
  ],
  providers: [],
})
export class HrModule { }
