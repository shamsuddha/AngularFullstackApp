import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { RxFormBuilder } from "@rxweb/reactive-form-validators";
import { Observable } from "rxjs";
import { ProductController } from "src/app/controller/ProductController";
import { ProductSearchDto } from "src/app/dto/request/ProductSearchDto";
import { Product } from "src/app/entity/Product";

@Component({
  selector: 'ProductSetupComp',
  templateUrl: './ProductSetupComp.html',
  styleUrls: ['./ProductSetupComp.scss'],
  //standalone: true
})
export class ProductSetupComp {

  breadCrumbItems!: Array<{}>;
  title!: string;
  productFg: FormGroup = this.rxFormBuilder.formGroup(Product);
  //userInfoRoleListFa: FormArray = this.productFg.get('userInfoRoleList') as FormArray;
  productList$: Observable<Array<Product>> = new Observable<Array<Product>>();

  constructor(
    public productController: ProductController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'Product' }, { label: 'Product', active: true }];
  }

  // fn1() {
  //   this.productFg.patchValue({
  //     addressList: [new Address({ id: 1, name: 'name1' }),
  //     new Address({ id: 2, name: 'name2' })]
  //   })
  // }

  save() {
    this.productController.save(this.productFg.value).subscribe((e) => { this.search(); });
  }

  onUpdateClick(userInfo: Product) {
    this.productFg.patchValue(userInfo);
    //this.productFg.patchValue({id:userInfo.id,name:userInfo.name});
    console.log(this.productFg.value);
  }

  update() {
    this.productController.update(this.productFg.value).subscribe((e) => { this.search(); });
  }

  delete(userInfo: Product) {
    this.productController.delete(userInfo).subscribe((e) => { this.search(); });
  }

  search() {
    this.productList$ = this.productController.search(new ProductSearchDto({ "idList": [] }));
    /*.subscribe((e:Array<Product>)=>{
    console.log(e)
  })*/
  }
}

