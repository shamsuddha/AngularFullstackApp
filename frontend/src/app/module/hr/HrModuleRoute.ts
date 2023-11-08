import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrModuleComp } from './HrModuleComp';

const routes: Routes = [
  {
    path: '', component: HrModuleComp,
    children: [
      {
        path: 'user-info-setup', loadChildren: () => import('./user_info_setup/UserInfoSetupModule')
          .then(m => m.UserInfoSetupModule)
      },
      {
        path: 'role-setup', loadChildren: () => import('./role_setup/RoleSetupModule')
          .then(m => m.RoleSetupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrModuleRoute { }
