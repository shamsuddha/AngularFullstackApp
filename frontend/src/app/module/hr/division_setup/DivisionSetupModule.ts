import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DivisionSetupComp } from './DivisionSetupComp';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DistrictDialogComp } from './dialog/DistrictDialogComp';
import { AgGridModule } from 'ag-grid-angular'; // Angular Grid Logic
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations:  [
    DivisionSetupComp,
    DistrictDialogComp
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
    MatDialogModule,
    AgGridModule,
    PaginationModule.forRoot(),
  
  ],

  providers: [
    
  ],
})
export class DivisionSetupModule {}
