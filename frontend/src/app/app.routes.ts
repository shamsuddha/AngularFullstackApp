import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routeList: Routes = [
  {
    path: 'module',
   // component: AppComponent,
    loadChildren: () => import('./module/MainModule').then(m => m.MainModule)
  }
];


//export const routes: Routes = [];
