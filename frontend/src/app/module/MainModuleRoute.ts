import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';

const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: 'hr', loadChildren: () => import('./hr/HrModule')
          .then(m => m.HrModule)
      },
      {
        path: 'ecommerce', loadChildren: () => import('./ecommerce/EcommerceModule')
          .then(m => m.EcommerceModule)
      },
      {
        path: 'social', loadChildren: () => import('./ecommerce/SocialModule')
          .then(m => m.SocialModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoute { }