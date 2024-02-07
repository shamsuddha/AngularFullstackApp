import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'ContainerComp',
  templateUrl: './ContainerComp.html',
  styleUrls: ['./ContainerComp.scss'],
})
export class ContainerComp implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  listOfString: string[] = ["rajit", "sami", "asma", "hello world"];


}