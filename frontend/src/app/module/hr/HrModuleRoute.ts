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
      },
      {
        path: 'user-info-role-setup', loadChildren: () => import('./user_info_role_setup/UserInfoRoleSetupModule')
          .then(m => m.UserInfoRoleSetupModule)
      },
      {
        path: 'order-info-setup', loadChildren: () => import('./order_info_setup/OrderInfoSetupModule')
          .then(m => m.OrderInfoSetupModule)
      },
      {
        path: 'order-info-detail-setup', loadChildren: () => import('./order_info_detail_setup/OrderInfoDetailSetupModule')
          .then(m => m.OrderInfoDetailSetupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrModuleRoute { }
