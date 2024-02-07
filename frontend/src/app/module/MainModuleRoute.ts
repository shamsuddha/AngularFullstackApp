import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';

const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: 'user-info-setup', loadChildren: () => import('./hr/HrModule')
          .then(m => m.HrModule)
      },
     
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
