import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerModuleComp } from './ContainerModuleComp';


const routes: Routes = [
  {
    path: '', component: ContainerModuleComp,
    children: [
      // {
      //   path: 'brand-setup', loadChildren: () => import('./brand_setup/BrandSetupModule')
      //     .then(m => m.BrandSetupModule)
      // },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContainerModuleRoute { }
