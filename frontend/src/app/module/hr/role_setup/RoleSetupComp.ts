import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RoleSetupController } from 'src/app/controller/RoleSetupController';
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
  userInfoRoleListFa: FormArray = this.roleFg.get('userInfoRoleList') as FormArray;
  roleList$: Observable<Array<Role>> = new Observable<Array<Role>>();
  
  constructor(
    public roleSetupController: RoleSetupController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'Role' }, { label: 'Role', active: true }];
  }

  save() {
    this.roleSetupController.save(this.roleFg.value).subscribe((e) => { });
    this.search();
  }

  onUpdateClick(role: Role) {
    this.roleFg.patchValue(role);
    //this.roleFg.patchValue({id:role.id,name:role.name});
    console.log(this.roleFg.value);
  }

  update() {
    this.roleSetupController.update(this.roleFg.value).subscribe((e) => { });
  }

  delete(role: any, id: number) {
    this.roleSetupController.delete(role).subscribe((e) => { this.search(); });
  }

  search() {
    this.roleList$ = this.roleSetupController.search(new RoleSearchDto({"idList": []}));
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  toFaGfn = (fa: any) => {
    return fa as FormArray;
  }

}
