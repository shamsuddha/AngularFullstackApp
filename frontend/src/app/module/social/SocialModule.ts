import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialModuleComp } from './SocialModuleComp';
import { SocialModuleRoute } from './SocialModuleRoute';

@NgModule({
  declarations: [
    SocialModuleComp
  ],
  imports: [
    CommonModule, 
    SocialModuleRoute
  ],
  providers: [],
})
export class SocialModule { }