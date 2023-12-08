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

@Component({
  selector: 'DivisionSetupComp',
  templateUrl: './DivisionSetupComp.html',
  styleUrls: ['./DivisionSetupComp.scss'],
})
export class DivisionSetupComp {

  breadCrumbItems!: Array<{}>;
  title!: string;
  divisionFg: FormGroup = this.rxFormBuilder.formGroup(Division);
  toFaGfn = toFaGfn;
  divisionList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  divisionWithDistrictList$: Observable<Array<Division>> = new Observable<Array<Division>>();
  
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
}