import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layouts/layout.component';
import {AuthGuard} from './services/AuthGuard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    loadChildren: () => import('./pages/PageModule').then(m => m.PageModule), canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/login/LoginCompModule').then(m => m.LoginCompModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
