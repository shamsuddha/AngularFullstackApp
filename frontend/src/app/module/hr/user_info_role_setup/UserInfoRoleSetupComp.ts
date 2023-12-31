import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {Observable} from 'rxjs';
import {UserInfoRoleController} from 'src/app/controller/UserInfoRoleController';
import {UserInfoController} from 'src/app/controller/UserInfoController';
import {UserInfoSearchDto} from 'src/app/dto/request/UserInfoSearchDto';
import {Role} from 'src/app/entity/Role';
import {UserInfo} from 'src/app/entity/UserInfo';
import {UserInfoRole} from 'src/app/entity/UserInfoRole';
import {toFaGfn} from "../../../../util/MiscUtil";
import {RoleController} from "../../../controller/RoleController";
import {RoleSearchDto} from "../../../dto/request/RoleSearchDto";

@Component({
  selector: 'UserInfoRoleSetupComp',
  templateUrl: './UserInfoRoleSetupComp.html',
  styleUrls: ['./UserInfoRoleSetupComp.scss'],
  //standalone: true
})
export class UserInfoRoleSetupComp implements OnInit {

  breadCrumbItems: Array<{}> = [];
  title!: string;

  userInfoRoleFg: FormGroup = this.rxFormBuilder.formGroup(UserInfoRole);
  toFaGfn = toFaGfn;

  userInfoRoleList$: Observable<Array<UserInfoRole>> = new Observable<Array<UserInfoRole>>();
  userInfoList$: Observable<Array<UserInfo>> = new Observable<Array<UserInfo>>();
  roleList$: Observable<Array<Role>> = new Observable<Array<Role>>();

  constructor(
    public userInfoRoleSetupController: UserInfoRoleController,
    public roleSetupController: RoleController,
    public rxFormBuilder: RxFormBuilder,
    public userInfoSetupController: UserInfoController
  ) {
  }

  ngOnInit() {
    this.search();
    this.userInfoList$ = this.userInfoSetupController.search(new UserInfoSearchDto({"idList": []}))
    this.roleList$ = this.roleSetupController.search(new RoleSearchDto({"idList": []}))
    this.breadCrumbItems = [{label: 'userInfoRole'}, {label: 'userInfoRole', active: true}];
  }

  save() {
    this.userInfoRoleSetupController.save(this.userInfoRoleFg.value).subscribe((e) => {
      this.search();
    });
  }

  onUpdateClick(userInfoRole: UserInfoRole) {
    this.userInfoRoleFg.patchValue(userInfoRole);
    //this.userInfoRoleFg.patchValue({id:role.id, name:userInfoRole.name});
    console.log(this.userInfoRoleFg.value);
  }

  update() {
    this.userInfoRoleSetupController.update(this.userInfoRoleFg.value)
    .subscribe((e) => {
        this.search();
      });
  }

  delete(userInfoRole: UserInfoRole) {
    this.userInfoRoleSetupController.delete(userInfoRole).subscribe((e) => {
      this.search();
    });
  }

  search() {
    //this.userInfoRoleList$ = this.userInfoRoleSetupController.search(new UserInfoRoleSearchDto({"idList": []}));
    this.userInfoRoleList$ = this.userInfoRoleSetupController.searchWithUserInfoRole();

    /*.subscribe((e:Array<Role>)=>{
    console.log(e)
  })*/
  }

  reset() {
    this.userInfoRoleFg.reset();
  }
}