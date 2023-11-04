import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSetupComp } from './user_setup/UserSetupComp';


const routes: Routes = [
  {
    path: 'user',
    component: UserSetupComp
  }
  // {
  //   path: 'department',
  //   component: DepartmentComp
  // },
  // {
  //   path: 'designation',
  //   component: DesignationComp
  // }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrRoutingModule { }
