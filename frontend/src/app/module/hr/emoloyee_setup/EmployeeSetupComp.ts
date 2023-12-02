import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormArray, FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Observable, filter} from "rxjs";
import {toFaGfn} from "../../../../util/MiscUtil";
import {FloorController} from "src/app/controller/FloorController";
import {FloorSearchDto} from "src/app/dto/request/FloorSearchDto";
import {Floor} from "src/app/entity/Floor";
import {Room} from "src/app/entity/Room";
import {RoomController} from "src/app/controller/RoomController";
import { Employee } from "src/app/entity/Employee";
import { Division } from "src/app/entity/Division";
import { District } from "src/app/entity/District";
import { Upozila } from "src/app/entity/Upozila";
import { EmployeeController } from "src/app/controller/EmployeeController";
import { DivisionController } from "src/app/controller/DivisionController";
import { DistrictController } from "src/app/controller/DistrictController";
import { UpozilaController } from "src/app/controller/UpozilaController";
import { DivisionSearchDto } from "src/app/dto/request/DivisionSearchDto";
import { DistrictSearchDto } from "src/app/dto/request/DisctrictSearchDto";
import { UpozilaSearchDto } from "src/app/dto/request/UpozilaSearchDto";

@Component({
  selector: 'EmployeeSetupComp',
  templateUrl: './EmployeeSetupComp.html',
  styleUrls: ['./EmployeeSetupComp.scss'],
  //standalone: true
})

export class EmployeeSetupComp implements OnInit {


  breadCrumbItems: Array<{}> = [];
  title!: string;

  employeeFg: FormGroup = this.rxFormBuilder.formGroup(Employee);
  toFaGfn = toFaGfn;

  employeeList$: Observable<Array<Employee>> = new Observable<Array<Employee>>();
  divisionList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  districtList$: Observable<Array<District>> = new Observable<Array<District>>();
  upozilaList$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();

  constructor(
    public employeeController: EmployeeController,
    public divisionController: DivisionController,
    public districtController: DistrictController,
    public upozilaController: UpozilaController,   
    public rxFormBuilder: RxFormBuilder,

  ) {
  }

  ngOnInit() {
    this.search();
    this.divisionList$ = this.divisionController.search(new DivisionSearchDto({"idList": []}))
    this.districtList$ = this.districtController.search(new DistrictSearchDto({"idList": []}))
    this.upozilaList$ = this.upozilaController.search(new UpozilaSearchDto({"idList": []}))    
    this.breadCrumbItems = [{label: 'employee'}, {label: 'employee', active: true}];
  }

  save() {
    this.employeeController.save(this.employeeFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(employee: Employee) {
    this.employeeFg.patchValue(employee);
    //this.employeeFg.patchValue({id:role.id, name:employee.name});
    console.log(this.employeeFg.value);
  }

  update() {
    this.employeeController.update(this.employeeFg.value)
    .subscribe((e) => {
        this.search();
      });
  }

  delete(employee: Employee) {
    this.employeeController.delete(employee).subscribe((e) => {
      this.search();
    });
  }

  search() {
    //this.employeeList$ = this.employeeSetupController.search(new EmployeeSearchDto({"idList": []}));
    this.employeeList$ = this.employeeController.searchWithEmployee();

    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  reset() {
   // this.employeeFg.reset();
  }

  onSelectDivision(division: Division) {
    this.employeeFg.patchValue({
      divisionName: division.name
    });
    
    this.districtList$ =  this.districtController.search(new DistrictSearchDto({"idList": []}))
    .pipe(
      filter((e:Array<District>) => {
        return  e.find((t: District) => t.divisionId == division.id));
      }).subscribe();


  

   
  onSelectDistrict($event: { id: number, name: string }) {
    this.employeeFg.patchValue({
      districtName: $event.name

    });

    console.log($event);
    console.log(this.thanaWithDistrictList);
    this.thanaList = this.thanaWithDistrictList.filter((e) => e.districtId == $event.id);
    console.log(this.thanaList);
  }
}