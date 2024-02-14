import { Component } from "@angular/core";

@Component({
  selector: 'MainMenuComp',
  templateUrl:'./MainMenuComp.html',
  styleUrls: ['./MainMenuComp.scss']
})
export class MainMenuComp{

  mainMenuItems: string[] = ['home', 'products','cart','checkout','profile']

  constructor(){

  }
  

}