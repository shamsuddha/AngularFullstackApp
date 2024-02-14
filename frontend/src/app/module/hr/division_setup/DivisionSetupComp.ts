import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { DivisionController } from "src/app/controller/DivisionController";
import { DivisionSearchDto } from "src/app/dto/request/DivisionSearchDto";
import { Division } from "src/app/entity/Division";
import { toFaGfn } from "src/util/MiscUtil";
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DistrictDialogComp } from "./dialog/DistrictDialogComp";
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'DivisionSetupComp',
  templateUrl: './DivisionSetupComp.html',
  styleUrls: ['./DivisionSetupComp.scss'],
})
export class DivisionSetupComp{

  breadCrumbItems!: Array<{}>;
  title!: string;
  divisionFg: FormGroup = this.rxFormBuilder.formGroup(Division);
  toFaGfn = toFaGfn;
  divisionList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  divisionWithDistrictList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  totalItems = 64;
  currentPage = 1;
 
  constructor(
    public divisionController: DivisionController,
    public rxFormBuilder: RxFormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Division' }, { label: 'Division', active: true }];
    this.searchWithDistrictList();
    this.search();
  }
  
  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  save() {
    this.divisionController.save(this.divisionFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(division: Division) {
    this.divisionFg.patchValue(division);
    this.divisionFg.patchValue({updateMode:true});

    console.log(this.divisionFg.value);
  }

  update() {
    this.divisionController.update(this.divisionFg.value).subscribe((e) => {
      this.search();
    });
  }

  delete(division: Division) {
    this.divisionController.delete(division).subscribe((e) => { this.search(); });
  }

  search() {
    this.divisionList$ = this.divisionController.search(new DivisionSearchDto({ "idList": [] }));
  }

  searchWithDistrictList() {
    this.divisionWithDistrictList$ = this.divisionController.searchWithDistrictList();
  }

  openDialog(division: Division){
    this.divisionWithDistrictList$ = this.divisionController.searchWithDistrictList();
   
      this.dialog.open(DistrictDialogComp, {
        width: '250px',
        data: division
       
      }).afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  
  }

  rowData = [
    { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
    { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
    { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
  ];

  // Column Definitions: Defines & controls grid columns.
  columnDefs: ColDef[] = [
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" }
  ];
}