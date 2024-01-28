import { Component } from "@angular/core";

@Component({
  selector: 'CustomerComp',
  templateUrl: './CustomerComp.html',
  styleUrls: ['./CustomerComp.scss']
})

export class CustomerComp
{
  constructor( public upozilaController: UpozilaController,
    public districtController: DistrictController){}



  totalItems = 64;
  currentPage = 1;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  save() {
    this.upozilaController.save(this.upozilaFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(upozila: Upozila) {
    this.upozilaFg.patchValue(upozila);
    this.upozilaFg.patchValue({updateMode:true});
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
}