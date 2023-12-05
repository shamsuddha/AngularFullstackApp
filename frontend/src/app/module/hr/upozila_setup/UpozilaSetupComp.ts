import {Component} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {RxFormBuilder} from "@rxweb/reactive-form-validators";
import {Observable} from "rxjs";
import {DistrictController} from "src/app/controller/DistrictController";
import {UpozilaController} from "src/app/controller/UpozilaController";
import {DistrictSearchDto} from "src/app/dto/request/DisctrictSearchDto";

import {District} from "src/app/entity/District";
import {Upozila} from "src/app/entity/Upozila";
import {UpozilaSearchDto} from "../../../controller/search_dto/UpozilaSearchDto";


@Component({
  selector: 'UpozilaSetupComp',
  templateUrl: './UpozilaSetupComp.html',
  styleUrls: ['./UpozilaSetupComp.scss']
})

export class UpozilaSetupComp {

  breadCrumbItems!: Array<{}>;
  title!: string;
  upozilaFg: FormGroup = this.rxFormBuilder.formGroup(Upozila);
  upozilaSearchDtoFg: FormGroup = this.rxFormBuilder.formGroup(UpozilaSearchDto);
  upozilaList$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();
  districtList$: Observable<Array<District>> = new Observable<Array<District>>();
  upozilaListWithDistrict$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();
  upozilaListWithDistrictWithDivision$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();

  constructor(
    public rxFormBuilder: RxFormBuilder,
    public upozilaController: UpozilaController,
    public districtController: DistrictController) {
  }

  ngOnInit() {
    this.searchWithDistrict();
    this.districtList$ = this.districtController.search(new DistrictSearchDto({"idList": []}))
    this.breadCrumbItems = [{label: 'Upozila'}, {label: 'Upozila', active: true}];
  }


  save() {
    this.upozilaController.save(this.upozilaFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(upozila: Upozila) {
    this.upozilaFg.patchValue(upozila);
    //this.roleFg.patchValue({id:role.id,name:role.name});
    console.log(this.upozilaFg.value);
  }

  update() {
    this.upozilaController.update(this.upozilaFg.value).subscribe((e) => {
      this.search();
    });
  }

  delete(upozila: Upozila) {
    //console.log(role);
    this.upozilaController.delete(upozila).subscribe((e) => {
      this.search();
    });
  }

  search() {
    this.upozilaList$ = this.upozilaController.search(new UpozilaSearchDto({}));
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  searchWithDistrict() {
    this.upozilaListWithDistrict$ = this.upozilaController.searchWithDistrict(this.upozilaSearchDtoFg.value);
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  searchWithDistrictWithDivision() {
    this.upozilaListWithDistrictWithDivision$ = this.upozilaController.searchWithDistrictWithDivision(this.upozilaSearchDtoFg.value);
  }

  reset() {
  }


}
