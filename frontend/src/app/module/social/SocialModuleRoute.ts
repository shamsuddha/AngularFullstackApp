import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialModuleComp } from './SocialModuleComp';

const routes: Routes = [
  {
    path: '', component: SocialModuleComp,
    children: [
      // {
      //   path: 'post-setup', loadChildren: () => import('./post/UserInfoSetupModule')
      //     .then(m => m.UserInfoSetupModule)
      // },
      // {
      //   path: 'comment-setup', loadChildren: () => import('./role_setup/RoleSetupModule')
      //     .then(m => m.RoleSetupModule)
      // },
    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SocialModuleRoute { }
