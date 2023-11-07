import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'MainModuleComp',
  template: '<router-outlet></router-outlet>',
})
export class MainModuleComp implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}