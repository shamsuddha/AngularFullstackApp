import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'module',
    component: LayoutComponent,
    loadChildren: () => import('./module/MainModule').then(m => m.MainModule)
  },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule), canActivate: [AuthGuard] },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  {
    path: 'ag-grid-setup', loadChildren: () => import('./module/hr/ag-grid-example/AgGridExampleComp')
      .then(m => m.AgGridExampleComp)
  },
  // {path: 'ag-grid-setup', loadComponent: () => import('./module/login/LoginComp').then(m => m.LoginComp)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
