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
      },
      {
        path: 'floor-setup', loadChildren: () => import('./floor_setup/FloorSetupModule')
          .then(m => m.FloorSetupModule)
      },
      {
        path: 'room-setup', loadChildren: () => import('./room_setup/RoomSetupModule')
          .then(m => m.RoomSetupModule)
      },
      {
        path: 'division-setup', loadChildren: () => import('./division_setup/DivisionSetupModule')
          .then(m => m.DivisionSetupModule)
      },
      {
        path: 'district-setup', loadChildren: () => import('./district_setup/DistrictSetupModule')
          .then(m => m.DistrictSetupModule)
      },
      {
        path: 'upozila-setup', loadChildren: () => import('./upozila_setup/UpozilaSetupModule')
          .then(m => m.UpozilaSetupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrModuleRoute { }
