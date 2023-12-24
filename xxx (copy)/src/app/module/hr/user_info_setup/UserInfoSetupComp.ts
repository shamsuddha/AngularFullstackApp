import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/entity/UserInfo';
import { UserInfoController } from '../../../controller/UserInfoController';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { UserInfoSearchDto } from 'src/app/dto/request/UserInfoSearchDto';

@Component({
  selector: 'UserInfoSetupComp',
  templateUrl: './UserInfoSetupComp.html',
  styleUrls: ['./UserInfoSetupComp.scss'],
  //standalone: true
})
export class UserInfoSetupComp implements OnInit {

  //BreadCrumb Items
  breadCrumbItems!: Array<{}>;
  title!: string;

  // Form Items
  userInfoFg: FormGroup = this.rxFormBuilder.formGroup(UserInfo);
  //userInfoRoleListFa: FormArray = this.userInfoFg.get('userInfoRoleList') as FormArray;
  //toFaGfn = toFaGfn;
  userInfoList$: Observable<Array<UserInfo>> = new Observable<Array<UserInfo>>();

  constructor(
    public userInfoController: UserInfoController,
    public rxFormBuilder: RxFormBuilder
  ) { }

  ngOnInit() {
    this.search();
    this.breadCrumbItems = [{ label: 'User' }, { label: 'User', active: true }];
  }

  // fn1() {
  //   this.userInfoFg.patchValue({
  //     addressList: [new Address({ id: 1, name: 'name1' }),
  //     new Address({ id: 2, name: 'name2' })]
  //   })
  // }

  save() {
    this.userInfoController.save(this.userInfoFg.value).subscribe((e) =>
    { this.search();});
  }

  onUpdateClick(userInfo: UserInfo) {
    this.userInfoFg.patchValue(userInfo);
    this.userInfoFg.patchValue({updateMode:true});
    //this.userInfoFg.patchValue({id:userInfo.id,name:userInfo.name});
    console.log(this.userInfoFg.value);
  }

  update() {
    this.userInfoController.update(this.userInfoFg.value).subscribe((e) =>
    {this.search(); });
  }

  delete(userInfo: UserInfo) {
    this.userInfoController.delete(userInfo).subscribe((e) =>
    { this.search(); });
  }

  search() {
    this.userInfoList$ = this.userInfoController.search(new UserInfoSearchDto({"idList": []}));
    /*.subscribe((e:Array<UserInfo>)=>{
    console.log(e)
  })*/
  }


}

