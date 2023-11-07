import { RoleComp } from './RoleComp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations:
  [
    
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoleComp,
      },

    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],

  providers: [
    
  ],
})
export class RoleModule {}
