import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosModuleComp } from './PosModuleComp';

const routes: Routes = [
  {
    path: '', component: PosModuleComp,
    children: [
      {
        path: 'category', loadChildren: () => import('./category_setup/CategorySetupModule')
          .then(m => m.CategorySetupModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PosModuleRoute { }
