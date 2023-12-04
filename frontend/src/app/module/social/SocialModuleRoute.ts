import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialModuleComp } from './SocialModuleComp';

const routes: Routes = [
  {
    path: '', component: SocialModuleComp,
    children: [
      {
        path: 'post-setup', loadChildren: () => import('./post_setup/PostSetupModule')
          .then(m => m.PostSetupModule)
      },
      {
        path: 'comment-setup', loadChildren: () => import('./comment_setup/CommentSetupModule')
          .then(m => m.CommentSetupModule)
      },   
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SocialModuleRoute { }
