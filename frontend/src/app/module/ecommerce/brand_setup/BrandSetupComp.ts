import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { BrandController } from "src/app/controller/BrandController";
import { BrandSearchDto } from "src/app/dto/request/BrandSearchDto";
import { Brand } from "src/app/entity/Brand";

@Component({
  selector: 'BrandSetupComp',
  templateUrl: './BrandSetupComp.html',
  styleUrls: ['./BrandSetupComp.scss'],
  //standalone: true 
})
export class BrandSetupComp{

    breadCrumbItems!: Array<{}>;
    title!: string;

  // Form Items
  brandFg: FormGroup = this.rxFormBuilder.formGroup(Brand);
  //userInfoRoleListFa: FormArray = this.brandFg.get('userInfoRoleList') as FormArray;
  //toFaGfn = toFaGfn;
  brandList$: Observable<Array<Brand>> = new Observable<Array<Brand>>();

  constructor(
    public brandController: BrandController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'User' }, { label: 'User', active: true }];
  }

  // fn1() {
  //   this.brandFg.patchValue({
  //     addressList: [new Address({ id: 1, name: 'name1' }),
  //     new Address({ id: 2, name: 'name2' })]
  //   })
  // }

  save() {
    this.brandController.save(this.brandFg.value).subscribe((e) =>
    { this.search();});
  }

  onUpdateClick(userInfo: Brand) {
    this.brandFg.patchValue(userInfo);
    this.brandFg.patchValue({updateMode:true});
    //this.brandFg.patchValue({id:userInfo.id,name:userInfo.name});
    console.log(this.brandFg.value);
  }

  update() {
    this.brandController.update(this.brandFg.value).subscribe((e) =>
    {this.search(); });
  }

  delete(userInfo: Brand) {
    this.brandController.delete(userInfo).subscribe((e) =>
    { this.search(); });
  }

  search() {
    this.brandList$ = this.brandController.search(new BrandSearchDto({"idList": []}));
    /*.subscribe((e:Array<Brand>)=>{
    console.log(e)
  })*/
  }
}