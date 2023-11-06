import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleComp } from './role/RoleComp';
import { UserInfoComp } from './user_info/UserInfoComp';

const routes: Routes = [
  {
    path: 'user_info',
    component: UserInfoComp
  },
  {
    path: 'role',
    component: RoleComp
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrRoutingModule { }
