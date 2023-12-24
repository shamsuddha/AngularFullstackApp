import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'DashboardComp',
  templateUrl: './DashboardComp.html',
  styleUrls: ['./DashboardComp.scss']
})
export class DashboardComp implements OnInit {

  breadCrumbItems: Array<{}> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      {label: 'Dashboard'},
      {label: 'Dashboard', active: true}
    ];
  }
}
