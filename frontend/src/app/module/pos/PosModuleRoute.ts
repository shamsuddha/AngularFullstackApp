import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosModuleComp } from './PosModuleComp';

const routes: Routes = [
  {
    path: '', component: PosModuleComp,
    children: [
      // {
      //   path: 'hr', loadChildren: () => import('./pos/Module')
      //     .then(m => m.HrModule)
      // },
      // {
      //   path: 'ecommerce', loadChildren: () => import('./ecommerce/EcommerceModule')
      //     .then(m => m.EcommerceModule)
      // },
      // {
      //   path: 'container', loadChildren: () => import('./container/ContainerModule')
      //     .then(m => m.ContainerModule)
      // },
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PosModuleRoute { }
