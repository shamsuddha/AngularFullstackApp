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
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrModuleRoute { }
