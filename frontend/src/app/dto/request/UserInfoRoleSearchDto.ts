export class UserInfoRoleSearchDto {

  idList: Array<number> = [];
  
  constructor(o?: Partial<UserInfoRoleSearchDto>) {
    Object.assign(this, o);
  }
}
