import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainModuleComp } from './MainModuleComp';

const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: 'pos', loadChildren: () => import('./pos/PosModule')
          .then(m => m.PosModule)
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainModuleRoute { }
