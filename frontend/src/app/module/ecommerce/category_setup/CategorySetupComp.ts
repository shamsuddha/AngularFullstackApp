import { Component } from "@angular/core";
import { FormArray, FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { CategoryController } from "src/app/controller/CategoryController";
import { CategorySearchDto } from "src/app/dto/request/CategorySearchDto";
import { Category } from "src/app/entity/Category";


@Component({
  selector: 'CategorySetupComp',
  templateUrl: './CategorySetupComp.html',
  styleUrls: ['./CategorySetupComp.scss'],
  //standalone: true
})
export class CategorySetupComp{

  breadCrumbItems!: Array<{}>;
  title!: string;

// Form Items
categoryFg: FormGroup = this.rxFormBuilder.formGroup(Category);
//userInfoRoleListFa: FormArray = this.categoryFg.get('userInfoRoleList') as FormArray;
//toFaGfn = toFaGfn;
categoryList$: Observable<Array<Category>> = new Observable<Array<Category>>();

constructor(
  public categoryController: CategoryController,
  public rxFormBuilder: RxFormBuilder
) { }

ngOnInit() {
  this.search();
  this.breadCrumbItems = [{ label: 'Category' }, { label: 'Category', active: true }];
}

// fn1() {
//   this.categoryFg.patchValue({
//     addressList: [new Address({ id: 1, name: 'name1' }),
//     new Address({ id: 2, name: 'name2' })]
//   })
// }

save() {
  this.categoryController.save(this.categoryFg.value).subscribe((e) =>
  { this.search();});
}

onUpdateClick(userInfo: Category) {
  this.categoryFg.patchValue(userInfo);
  this.categoryFg.patchValue({updateMode:true});
  //this.categoryFg.patchValue({id:userInfo.id,name:userInfo.name});
  console.log(this.categoryFg.value);
}

update() {
  this.categoryController.update(this.categoryFg.value).subscribe((e) =>
  {this.search(); });
}

delete(userInfo: Category) {
  this.categoryController.delete(userInfo).subscribe((e) =>
  { this.search(); });
}

search() {
  this.categoryList$ = this.categoryController.search(new CategorySearchDto({"idList": []}));
  /*.subscribe((e:Array<Category>)=>{
  console.log(e)
})*/
}


}

