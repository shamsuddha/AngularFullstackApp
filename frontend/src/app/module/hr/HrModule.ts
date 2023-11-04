import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HrRoutingModule } from './HrRoutingModule';
import { UserSetupComp } from './user_setup/UserSetupComp';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserInfoController } from 'src/app/controller/UserInfoController';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [
    UserSetupComp
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,    
  ],
  providers: [],
})
export class HrModule { }
