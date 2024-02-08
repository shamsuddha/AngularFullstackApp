import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        path: 'container', loadChildren: () => import('./container/ContainerModule')
          .then(m => m.ContainerModule)
      },
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
