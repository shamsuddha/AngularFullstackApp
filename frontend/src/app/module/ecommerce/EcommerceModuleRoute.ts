import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcommerceModuleComp } from './EcommerceModuleComp';


const routes: Routes = [
  {
    path: '', component: EcommerceModuleComp,
    children: [
      {
        path: 'brand-setup', loadChildren: () => import('./brand_setup/BrandSetupModule')
          .then(m => m.BrandSetupModule)
      },
      {
        path: 'category-setup', loadChildren: () => import('./category_setup/CategorySetupModule')
          .then(m => m.CategorySetupModule)
      },
      
      {
        path: 'product-setup', loadChildren: () => import('./product_setup/ProductSetupModule')
          .then(m => m.ProductSetupModule)
      }
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EcommerceModuleRoute { }
