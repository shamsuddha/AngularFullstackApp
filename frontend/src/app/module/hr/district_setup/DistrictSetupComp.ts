import { Component } from "@angular/core";
import { AbstractControl, FormArray, FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { DistrictController } from "src/app/controller/DistrictController";
import { DivisionController } from "src/app/controller/DivisionController";
import { DistrictSearchDto } from "src/app/dto/request/DisctrictSearchDto";
import { DivisionSearchDto } from "src/app/dto/request/DivisionSearchDto";
import { District } from "src/app/entity/District";
import { Division } from "src/app/entity/Division";
import { Upozila } from "src/app/entity/Upozila";
import { toFaGfn } from "src/util/MiscUtil";

@Component({
  selector: 'DistrictSetupComp',
  templateUrl: './DistrictSetupComp.html',
  styleUrls: ['./DistrictSetupComp.scss']
})

export class DistrictSetupComp {

  breadCrumbItems!: Array<{}>;
  title!: string;
  districtFg: FormGroup = this.rxFormBuilder.formGroup(District);
  toFaGfn = toFaGfn;
  upozilaList$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();
  districtList$: Observable<Array<District>> = new Observable<Array<District>>();
  divisionList$: Observable<Array<Division>> = new Observable<Array<Division>>();

  constructor(
    public rxFormBuilder: RxFormBuilder,
    public districtController: DistrictController,
    public divisionController: DivisionController) {
  }

  ngOnInit() {
    this.search();
    this.divisionList$ = this.divisionController.search(new DivisionSearchDto({ "idList": [] }))
    this.breadCrumbItems = [{ label: 'District' }, { label: 'District', active: true }];
  }

  addUpozila() {
    (<FormArray>this.districtFg.get('upozilaList'))
      .push(this.rxFormBuilder.formGroup(Upozila));
  }

  saveWithUpozila() {
    let district: District = this.districtFg.value;
    district.upozilaListSerde = district.upozilaList;
    this.districtController.saveWithUpozila(district).subscribe((e) => {
      //this.search();
    });
  }

  // updateOrderWithDetailList() {
  //   this.districtFg.patchValue({code: 'code 1',});
  //   [1, 2, 3].forEach((e, i) => {
  //     (<FormArray>this.orderInfoFg.get('vehicleList'))
  //       .push(this.rxFormBuilder.formGroup(new OrderInfoDetail({
  //         id: Math.random() * 999
  //       })));
  //   })
  // }

  // delete(fg: AbstractControl, index: number) {
  //   console.log((<FormGroup>fg).value)
  // }

  // save() {
  //   console.log(this.orderInfoFg.value)
  // }

  // onUpdateClick(orderInfoDetail: OrderInfoDetail) {
  //   console.log(orderInfoDetail)
  // }

  search() {
    this.districtList$ = this.districtController.search(new DistrictSearchDto({"idList": []}));
    /*.subscribe((e:Array<Floor>)=>{
    console.log(e)
  })*/
  }

  delete(fg: AbstractControl, index: number) {
    console.log((<FormGroup>fg).value)
  }

  searchWithFloor() {
    this.districtList$ = this.districtController.searchWithDivision();
  }

  reset() {

  }
}
