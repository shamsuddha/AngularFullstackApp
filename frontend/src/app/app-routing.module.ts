import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComp } from './module/MainModuleComp';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: 'hr', loadChildren: () => import('./module/hr/HrModule')
          .then(m => m.HrModule)
      },
      {
        path: 'ecommerce', loadChildren: () => import('./module/ecommerce/EcommerceModule')
          .then(m => m.EcommerceModule)
      },
      {
        path: 'social', loadChildren: () => import('./module/social/SocialModule')
          .then(m => m.SocialModule)
      },
    ]
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }