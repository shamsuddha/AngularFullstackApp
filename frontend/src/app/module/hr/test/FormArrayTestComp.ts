import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { prop, propArray, RxFormBuilder } from '@rxweb/reactive-form-validators';

class Time {
  @prop() form: string | null = null;
  constructor(o?: Partial<Time>) {
    Object.assign(this, o);
  }
}

class Student {

  @prop() name: string | null = null;

  @propArray(Time, { createBlank: true })
  timeList: Array<Time> = [];

  constructor(o?: Partial<Student>) {
    Object.assign(this, o)
  }
}

@Component({
  selector: 'FormArrayTest2Comp',
  template: `
       <pre> {{studentFg.value | json}} </pre>
        <form [formGroup]="studentFg">
    
          <button (click)="addFg()">Add</button>
    
          <div formArrayName="timeList"
               *ngFor="let time of studentFg.controls['timeList']?.value; let i = index; trackBy:trackByFn">
            <ng-container [formGroupName]="i">
              <input formControlName="from"/>
              <button (click)="removeGroup(i)">Del</button>
            </ng-container>
    
          </div>
          
    <button (click)="onSubmit()">Submit</button>
        </form>
        `
})
export class FormArrayTest2Comp implements OnInit {

  studentFg!: FormGroup;

  constructor(private fb: FormBuilder, private rxFormBuilder: RxFormBuilder) {
  }

  ngOnInit() {
    const student: Student = new Student({ name: 'name 1', 
    timeList: [{ form: 'f1' }, { form: 'f2' }] })
    this.studentFg = this.rxFormBuilder.formGroup(student)
  }

  trackByFn(index: number, item: any) {
    return item.trackingId;
  }
  addFg() {
    const control: FormArray = <FormArray>this.studentFg.controls['timeList'];
    const time = new Time({form: "", trackingId:Math.random().toString(36).substring(2, 15)});
    control.push(this.rxFormBuilder.formGroup(time))
    // control.push(this.fb.group({
    //   from: this.fb.control('', Validators.required),
    //   trackingId: Math.random().toString(36).substring(2, 15),
    // }));
  }

  removeGroup(i: number) {
    const control = <FormArray>this.studentFg.controls['timeList'];
    control.removeAt(i);
  }

  onSubmit() {
    console.log('value: ', this.studentFg.value);
    console.log('valid: ', this.studentFg.valid);
  }
}


