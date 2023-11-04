import { HomeComp } from './HomeComp';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:
  [
    HomeComp,
  ],
  imports:
  [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComp,
      }]),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
})
export class HomeModule {}
