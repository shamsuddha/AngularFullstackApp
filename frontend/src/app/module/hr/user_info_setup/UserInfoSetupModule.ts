import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoSetupComp } from './UserInfoSetupComp';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations:  [
    UserInfoSetupComp
  ],
  imports:  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserInfoSetupComp,
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    

  ],

  providers: [
    
  ],
})
export class UserInfoSetupModule {}
