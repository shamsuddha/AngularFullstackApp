import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { PosModuleRoute } from "./PosModuleRoute";

@Component({
  selector: 'PosModuleComp',
  template: '<router-outlet></router-outlet>',
  // standalone: true,
  // imports: [
  //   CommonModule, 
  //   PosModuleRoute
  // ],
})
export class PosModuleComp implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  
}