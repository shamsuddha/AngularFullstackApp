import { RoleComp } from './RoleComp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RoleDtoApiService } from '../Dto_Api_Services/RoleDtoApiService';

//import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations:
  [
    RoleComp,
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
    RoleDtoApiService
  ],
})
export class RoleModule {}
