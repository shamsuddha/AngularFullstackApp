import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { DistrictController } from "src/app/controller/DistrictController";
import { UpozilaController } from "src/app/controller/UpozilaController";
import { DistrictSearchDto } from "src/app/dto/request/DisctrictSearchDto";
import { UpozilaSearchDto } from "src/app/dto/request/UpozilaSearchDto";
import { District } from "src/app/entity/District";
import { Upozila } from "src/app/entity/Upozila";
import { CellComp } from "./CellComp";

@Component({
  selector: 'UpozilaSetupComp',
  templateUrl: './UpozilaSetupComp.html',
  styleUrls: ['./UpozilaSetupComp.scss']
})

export class UpozilaSetupComp {

  breadCrumbItems!: Array<{}>;
  title!: string;
  upozilaFg: FormGroup = this.rxFormBuilder.formGroup(Upozila);
  upozilaList$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>();
  districtList$: Observable<Array<District>> = new Observable<Array<District>>();
  upozilaListWithDistrict$: Observable<Array<Upozila>> = new Observable<Array<Upozila>>

  constructor(
    public rxFormBuilder: RxFormBuilder,
    public upozilaController: UpozilaController,
    public districtController: DistrictController) {
  }

  ngOnInit() {
    this.searchWithDistrict();
    this.districtList$ = this.districtController.search(new DistrictSearchDto({ "idList": [] }))
    this.breadCrumbItems = [{ label: 'Upozila' }, { label: 'Upozila', active: true }];
  }

  // // FOR AG GRID
  // frameworkComponents = { btnCellRenderer: CellComp };
  // columnDefs: ColDef[] = [
  //   {
  //     headerName: 'Action', editable: false, colId: 'action', width: 200,
  //     cellRenderer: 'btnCellRenderer', resizable: true,
  //     cellRendererParams: {
  //       updateFlag: true,
  //       deleteFlag: true,
  //       viewFlag: true,
  //       update: (param: any) => {
  //         this.updateHorse(param);
  //       },
  //       delete: (param: any) => {
  //         this.deleteHorse(param);
  //       },
  //       view: (param: any) => {
  //         this.viewHorse(param);
  //       }
  //     },
  //     pinned: 'left'
  //   },
  //   { headerName: 'Id', field: 'id', editable: false, colId: 'upozilaId', width: 100, filter: true },
  //   { headerName: 'districtId', field: 'districtId', editable: false, colId: 'districtId', width: 100, filter: true },
  //   { headerName: 'upozilaName', field: 'upozilaName', editable: false, colId: 'upozilaName', width: 100, filter: true },

  // ];

  // private updateHorse(param: any) {
  //   console.log(param.data);
  // }

  // private deleteHorse(param: any) {
  //   console.log(param.data);
  // }

  // private viewHorse(param: any) {
  //   console.log(param.data);
  // }

  save() {
    this.upozilaController.save(this.upozilaFg.value).subscribe((e) => { this.search(); });
  }

  onUpdateClick(upozila: Upozila) {
    this.upozilaFg.patchValue(upozila);
    //this.roleFg.patchValue({id:role.id,name:role.name});
    console.log(this.upozilaFg.value);
  }

  update() {
    this.upozilaController.update(this.upozilaFg.value).subscribe((e) => { this.search(); });
  }

  delete(upozila: Upozila) {
    //console.log(role);
    this.upozilaController.delete(upozila).subscribe((e) => { this.search(); });
  }

  search() {
    this.upozilaList$ = this.upozilaController.search(new UpozilaSearchDto({ "idList": [] }));
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  searchWithDistrict() {
    this.upozilaListWithDistrict$ = this.upozilaController.searchWithDistrict();
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  reset() { }
}
