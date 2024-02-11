import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PosModuleComp } from './PosModuleComp';
import { PosModuleRoute } from './PosModuleRoute';


@NgModule({
  declarations: [
    PosModuleComp
    
  ],
  imports: [
    CommonModule, 
    PosModuleRoute
  ],
  providers: [],
})
export class PosModule { }
