import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbDropdownModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {SimplebarAngularModule} from 'simplebar-angular';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {PageRoutingModule} from './PageRoutingModule';
import {DashboardComp} from './dashboard/DashboardComp';
import {PageTitleCompModule} from "../widget/pagetitle/PageTitleCompModule";

@NgModule({
  declarations: [
    DashboardComp
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    PageTitleCompModule,
    SimplebarAngularModule,
    FeatherModule.pick(allIcons),
    RouterModule,
    NgbDropdownModule,
    NgbNavModule
  ]
})
export class PageModule {
}
