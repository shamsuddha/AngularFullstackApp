import {NgModule} from '@angular/core';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComp} from './LoginComp';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    LoginComp,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComp
      }
    ]),
    NgbCarouselModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LoginCompModule {
}
