import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComp } from './UserInfoComp';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

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
        component: UserInfoComp,
      },

    ]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    RxReactiveFormsModule 

  ],

  providers: [
    
  ],
})
export class UserInfoModule {}
