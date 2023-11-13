import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RoleSetupController } from 'src/app/controller/RoleSetupController';
import { UserInfoSetupController } from 'src/app/controller/UserInfoSetupController';
import { Role } from 'src/app/entity/Role';
import { FormArray, FormGroup } from '@angular/forms';
import { RoleSearchDto } from 'src/app/dto/request/RoleSearchDto';
import { UserInfoRole } from 'src/app/entity/UserInfoRole';
import { UserInfoRoleSetupController } from 'src/app/controller/UserInfoRoleSetupController';
import { UserInfo } from 'src/app/entity/UserInfo';
import { UserInfoSearchDto } from 'src/app/dto/request/UserInfoSearchDto';
import { User } from 'src/app/core/models/auth.models';
import { UserInfoRoleSearchDto } from 'src/app/dto/request/UserInfoRoleSearchDto';

@Component({
  selector: 'UserInfoRoleSetupComp',
  templateUrl: './UserInfoRoleSetupComp.html',
  styleUrls: ['./UserInfoRoleSetupComp.scss'],
  //standalone: true
})
export class UserInfoRoleSetupComp implements OnInit {

  //BreadCrumb Items
  breadCrumbItems!: Array<{}>;
  title!: string;

  // Form Items
  userInfoRoleFg: FormGroup = this.rxFormBuilder.formGroup(UserInfoRole);

  //userInfoRoleListFa: FormArray = this.userInfoRoleFg.get('userInfoRoleList') as FormArray;
  //toFaGfn = toFaGfn;
  userInfoRoleList$: Observable<Array<UserInfoRole>> = new Observable<Array<UserInfoRole>>();
  userInfoList: Observable<Array<UserInfo>> = new Observable<Array<UserInfo>>();
  roleList$: Observable<Array<Role>> = new Observable<Array<Role>>();

  constructor(
    public userInfoRoleSetupController: UserInfoRoleSetupController,
    public rxFormBuilder: RxFormBuilder,
    public userInfoSetupController: UserInfoSetupController
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'userInfoRole' }, { label: 'userInfoRole', active: true }];
  }

  save() {
    this.userInfoRoleSetupController.save(this.userInfoRoleFg.value).subscribe((e) => { });
    this.search();
  }

  onUpdateClick(userInfoRole: UserInfoRole) {
    this.userInfoRoleFg.patchValue(userInfoRole);
    //this.userInfoRoleFg.patchValue({id:role.id,name:userInfoRole.name});
    console.log(this.userInfoRoleFg.value);
  }

  update() {
    this.userInfoRoleSetupController.update(this.userInfoRoleFg.value).subscribe((e) => { });
  }

  delete(userInfoRole: UserInfoRole) {
    this.userInfoRoleSetupController.delete(userInfoRole).subscribe((e) => { this.search(); });
  }

  search() {
    this.userInfoRoleList$ = this.userInfoRoleSetupController.search(new UserInfoRoleSearchDto({ "idList": [] }));
    console.log(this.userInfoRoleList$);
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }
}

// export const toFaGfn = (fa: any) => {
//   return fa as FormArray;
// }

