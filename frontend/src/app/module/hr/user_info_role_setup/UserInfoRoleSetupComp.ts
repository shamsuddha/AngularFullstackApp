import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RoleSetupController } from 'src/app/controller/RoleSetupController';
import { Role } from 'src/app/entity/Role';
import { FormArray, FormGroup } from '@angular/forms';
import { RoleSearchDto } from 'src/app/dto/request/RoleSearchDto';
import { UserInfoRole } from 'src/app/entity/UserInfoRole';
import { UserInfoRoleSetupController } from 'src/app/controller/UserInfoRoleSetupController';
import { UserInfo } from 'src/app/entity/UserInfo';
import { UserSearchDto } from 'src/app/dto/request/UserSearchDto';
import { User } from 'src/app/core/models/auth.models';

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
  userInfoList: Array<UserInfo> = [];
  roleList: Array<Role> = [];

  // roleList$: Observable<Array<Role>> = new Observable<Array<Role>>();
  
  constructor(
    public userInfoRoleSetupController: UserInfoRoleSetupController,
    public rxFormBuilder: RxFormBuilder,
    public userInfoSetupController: UserInfoRoleSetupController
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'userInfoRole' }, { label: 'userInfoRole', active: true }];
  }

  // onSelectDivision($event: { id: number, name: string }) {
  //   this.crudPracticeOneFg.patchValue({
  //     divisionName: $event.name
  //   });

  //   // console.log($event);
  //   this.districtList = this.districtWithDivisionList.filter((e) => e.divisionId == $event.id);
  //   console.log(this.districtList);
  // }


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
    this.userInfoRoleList$ = this.userInfoRoleSetupController.search(new RoleSearchDto({"idList": []}));
    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  getUserList() {
    this.userInfoSetupController.search(new UserSearchDto({"idList": []}));

    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }
}



// export const toFaGfn = (fa: any) => {
//   return fa as FormArray;
// }

