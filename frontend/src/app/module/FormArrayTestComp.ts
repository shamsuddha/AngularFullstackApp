import {Component, OnInit} from '@angular/core';
import {prop, propArray, RxFormBuilder} from '@rxweb/reactive-form-validators';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {toFaGfn} from "../../util/MiscUtil";

class Vehicle {
  @prop() id: string | null = null;
  @prop() vehicleName: string | null = null;

  constructor(o?: Partial<Vehicle>) {
    Object.assign(this, o);
  }
}

class StudentDto {
  @prop() id: string | null = null;
  @prop() name: string | null = null;

  @propArray(Vehicle)
  vehicleList: Array<Vehicle> = [];

  constructor(o?: Partial<StudentDto>) {
    Object.assign(this, o);
  }
}

@Component({
  selector: 'FormArrayTestComp',
  template: `
    <!-- <pre>{{studentFg.value | json}}</pre>
    <button (click)="addOneVehicle()">add one vehicle</button>
    <hr/>
    <button (click)="updateStudentWithVehicleList()">
      update student with vehicle list
    </button>

     <form [formGroup]="studentFg">
      student name:<input formControlName="name"/><br/>
      <div formArrayName="vehicleList"> -->
         <!--<div *ngFor="let item of vehicleListFa.controls; let index = index">-->
         <!-- <div *ngFor="let fg of toFaGfn(this.studentFg.get('vehicleList')).controls; let index = index">
           <div [formGroupName]="index">
             vahicle name: {{fg.value.id}} <input formControlName="vehicleName"/>
             <button (click)="delete(fg,index)">Del</button>
           </div>
         </div>
       </div>
     </form> -->
   `,
 })
 export class FormArrayTestComp implements OnInit {

  studentFg: FormGroup = this.rxFormBuilder.formGroup(StudentDto);
  //vehicleListFa: FormArray = this.studentFg.get('vehicleList') as FormArray;
  toFaGfn = toFaGfn;

  constructor(private fb: FormBuilder, private rxFormBuilder: RxFormBuilder) {
  }

  ngOnInit(): void {
  }

  addOneVehicle() {
    (<FormArray>this.studentFg.get('vehicleList'))
      .push(this.rxFormBuilder.formGroup(Vehicle));
  }

  updateStudentWithVehicleList() {
    this.studentFg.patchValue({name: 'student 1',});
    [1, 2, 3].forEach((e, i) => {
      (<FormArray>this.studentFg.get('vehicleList'))
        .push(this.rxFormBuilder.formGroup(new Vehicle({
          id: 'Temp###' + Math.random() * 999,
          vehicleName: 'vehicle ' + e
        })));
    })
  }

//   delete(fg, index) {
//     (<FormArray>this.studentFg.get('vehicleList')).removeAt(index);
//   }
 }


















