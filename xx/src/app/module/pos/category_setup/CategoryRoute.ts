import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorySetupComp } from './CategorySetupComp';

const routes: Routes = [
  {
    path: '', component: CategorySetupComp,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoryRoutes { }
