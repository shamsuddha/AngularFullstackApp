import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DivisionSetupComp } from './DivisionSetupComp';

@NgModule({
  declarations:  [
    DivisionSetupComp
  ],
  imports:  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DivisionSetupComp,
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
export class DivisionSetupModule {}
