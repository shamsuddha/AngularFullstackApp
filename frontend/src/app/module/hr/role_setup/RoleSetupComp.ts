import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RoleController } from 'src/app/controller/RoleController';
import { Role } from 'src/app/entity/Role';
import { FormArray, FormGroup } from '@angular/forms';
import { RoleSearchDto } from 'src/app/dto/request/RoleSearchDto';

@Component({
  selector: 'RoleSetupComp',
  templateUrl: './RoleSetupComp.html',
  styleUrls: ['./RoleSetupComp.scss'],
  //standalone: true
})
export class RoleSetupComp implements OnInit {

  //BreadCrumb Items
  breadCrumbItems!: Array<{}>;
  title!: string;

  // Form Items
  roleFg: FormGroup = this.rxFormBuilder.formGroup(Role);
  //userInfoRoleListFa: FormArray = this.roleFg.get('userInfoRoleList') as FormArray;
  //toFaGfn = toFaGfn;
  roleList$: Observable<Array<Role>> = new Observable<Array<Role>>();

  constructor(
    public roleController: RoleController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'Role' }, { label: 'Role', active: true }];
  }

  save() {
    this.roleController.save(this.roleFg.value).subscribe((e) => {this.search(); });
    this.search();
  }

  onUpdateClick(role: Role) {
    this.roleFg.patchValue(role);
    //this.roleFg.patchValue({id:role.id,name:role.name});
    console.log(this.roleFg.value);
  }

  update() {
    this.roleController.update(this.roleFg.value).subscribe((e) => {this.search(); });
    this.search();
  }

  delete(role: Role) {
    //console.log(role);
    this.roleController.delete(role).subscribe((e) => { this.search(); });
  }

  search() {
    this.roleList$ = this.roleController.search(new RoleSearchDto({ "idList": [] }));
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }
}

// export const toFaGfn = (fa: any) => {
//   return fa as FormArray;
// }

