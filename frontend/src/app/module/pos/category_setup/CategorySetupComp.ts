import { Component, OnInit } from "@angular/core";
import { CategoryController } from "../../../controller/CategoryController";
import { RxFormBuilder, RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'CategorySetupComp',
  templateUrl: './CategorySetupComp.html',
  styleUrls: ['./CategorySetupComp.scss'],
  
  // standalone:true,
  // imports: [
  //   CommonModule,
  //   FormsModule,
  //   ReactiveFormsModule,
  //   RxReactiveFormsModule,
  //   NgSelectModule,
  //   HttpClientModule
  // ],

})

export class CategorySetupComp implements OnInit {

  constructor() { }

  ngOnInit() { 
    this.helloWorld()
   }
  
   helloWorld()
   {
    console.log("category comming");
   }
}