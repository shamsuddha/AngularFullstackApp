import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { DivisionController } from "src/app/controller/DivisionController";
import { DivisionSearchDto } from "src/app/dto/request/DivisionSearchDto";
import { Division } from "src/app/entity/Division";
import { toFaGfn } from "src/util/MiscUtil";

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
  divisionWithDistrictList$: Observable<Array<Division>> = new Observable<Array<Division>>;
  
  constructor(
    public divisionController: DivisionController,
    public rxFormBuilder: RxFormBuilder
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
}