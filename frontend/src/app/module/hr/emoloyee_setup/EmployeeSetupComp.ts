import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {map, Observable, Subscription, tap} from "rxjs";
import {toFaGfn} from "../../../../util/MiscUtil";
import {Employee} from "src/app/entity/Employee";
import {Division} from "src/app/entity/Division";
import {District} from "src/app/entity/District";
import {Upozila} from "src/app/entity/Upozila";
import {EmployeeController} from "src/app/controller/EmployeeController";
import {DivisionController} from "src/app/controller/DivisionController";
import {DistrictController} from "src/app/controller/DistrictController";
import {UpozilaController} from "src/app/controller/UpozilaController";
import {DivisionSearchDto} from "src/app/dto/request/DivisionSearchDto";
import {DistrictSearchDto} from "src/app/dto/request/DisctrictSearchDto";
import {UpozilaSearchDto} from "../../../controller/search_dto/UpozilaSearchDto";
import { EmployeeSearchDto } from "src/app/dto/request/EmployeeSearchDto";


@Component({
  selector: 'EmployeeSetupComp',
  templateUrl: './EmployeeSetupComp.html',
  styleUrls: ['./EmployeeSetupComp.scss'],
  //standalone: true
})

export class EmployeeSetupComp implements OnInit, OnDestroy {

  breadCrumbItems: Array<{}> = [];
  title!: string;

  employeeFg: FormGroup = this.rxFormBuilder.formGroup(Employee);
  toFaGfn = toFaGfn;

  employeeList$: Observable<Array<Employee>> = new Observable<Array<Employee>>();
  divisionList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  districtList$: Observable<Array<District>> = new Observable<Array<District>>();
  upozilaList$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();

  // divisionList: Array<{ id: number, name: string }> = [
  //   { id: 1, name: 'Division 1' },
  //   { id: 2, name: 'Division 2' },
  //   { id: 3, name: 'Division 3' },
  // ];
  // districtWithDivisionList: Array<{id: number, name: string, divisionId: number}> = [
  //   { id: 1, name: 'district 11', divisionId: 1 },
  //   { id: 2, name: 'district 12', divisionId: 1 },
  //   { id: 3, name: 'district 13', divisionId: 1 },
  //   { id: 4, name: 'district 21', divisionId: 2 },
  //   { id: 5, name: 'district 22', divisionId: 2 },
  //   { id: 6, name: 'district 22', divisionId: 2 },
  //   { id: 7, name: 'district 31', divisionId: 3 },
  //   { id: 8, name: 'district 32', divisionId: 3 },
  //   { id: 9, name: 'district 33', divisionId: 3 },
  // ];
  // districtList: Array<{ id: number, name: string }> = [];
  // upozilaWithDistrictList: Array<{id: number, name: string, districtId: number}> = [
  //   { id: 1, name: 'upozila 11', districtId: 1 },
  //   { id: 2, name: 'upozila 12', districtId: 1 },
  //   { id: 3, name: 'upozila 21', districtId: 2 },
  //   { id: 4, name: 'upozila 22', districtId: 2 },
  //   { id: 5, name: 'upozila 31', districtId: 3 },
  //   { id: 6, name: 'upozila 32', districtId: 3 },
  //   { id: 7, name: 'upozila 41', districtId: 4 },
  //   { id: 8, name: 'upozila 42', districtId: 4 },
  //   { id: 9, name: 'upozila 51', districtId: 5 },
  //   { id: 10, name: 'upozila 52', districtId: 5 },
  //   { id: 11, name: 'upozila 61', districtId: 6 },
  //   { id: 12, name: 'upozila 62', districtId: 6 },
  //   { id: 13, name: 'upozila 71', districtId: 7 },
  //   { id: 14, name: 'upozila 72', districtId: 7 },
  //   { id: 15, name: 'upozila 81', districtId: 8 },
  //   { id: 16, name: 'upozila 82', districtId: 8 },
  //   { id: 17, name: 'upozila 91', districtId: 9 },
  //   { id: 18, name: 'upozila 92', districtId: 9 },
  //   { id: 19, name: 'upozila 93', districtId: 9 },
  // ];

  // upozilaList: Array<{ id: number, name: string }> = [];
  subscription1!: Subscription;

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
    this.divisionList$ = this.divisionController.search(new DivisionSearchDto({ "idList": [] }))
    // this.districtList$ = this.districtController.search(new DistrictSearchDto({"idList": []}))
    // this.upozilaList$ = this.upozilaController.search(new UpozilaSearchDto({"idList": []}))
    this.breadCrumbItems = [{ label: 'employee' }, { label: 'employee', active: true }];
  }

  onSelectDivision(division: Division) {
    this.employeeFg.patchValue({divisionName: division.name});
    // this.subscription1 = this.districtController.search(new DistrictSearchDto({ "idList": [] }))
    //   .pipe(
    //     map(e => e.filter(district => district.divisionId = division.id))
    //   )
    //   .subscribe(e => {
    //     console.log(e)
    //   });

    this.districtList$ = this.districtController.search(new DistrictSearchDto({ "idList": [] }))
      .pipe(
        map(e => e.filter(district => district.divisionId == division.id)),
        tap((e)=> console.log(e))
      )
      //console.log(this.districtList$);
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

  onSelectDistrict(district: District) {
    this.employeeFg.patchValue({ districtName: district.name});
    this.upozilaList$ = this.upozilaController.search(new UpozilaSearchDto())
    .pipe(
      map(e => e.filter(upozila => upozila.districtId == district.id))
    )
    // console.log($event);
    // console.log(this.upozilaWithDistrictList);
    // this.upozilaList = this.upozilaWithDistrictList.filter((e) => e.districtId == $event.id);
    // console.log(this.upozilaList);
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
    this.employeeList$ = this.employeeController.search(new EmployeeSearchDto({"idList":[]}));

    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  reset() {
    // this.employeeFg.reset();
  }
}
