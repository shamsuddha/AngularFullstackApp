import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hr', loadChildren: () => import('../module/hr/HrModule').then(m => m.HrModule)
  },
  {
    path: 'user', loadChildren: () => import('../module/hr/user_setup/UserSetupModule').then(m => m.UserSetupModule)
  },
  {
    path: 'social', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: 'ecommerce', loadChildren: () => import('./extended/extended.module').then(m => m.ExtendedModule)
  },
  {
    path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
 {
     path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
   },
  {
    path: 'chart', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
