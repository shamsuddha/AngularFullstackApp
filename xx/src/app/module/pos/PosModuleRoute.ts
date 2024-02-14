import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosModuleComp } from './PosModuleComp';

const routes: Routes = [
  {
    path: '', component: PosModuleComp,
    children: [
      {
        path: 'product-category', loadChildren: () => import('./product_category_setup/')
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
