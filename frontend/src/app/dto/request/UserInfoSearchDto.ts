export class UserInfoSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<UserInfoSearchDto>) {
    Object.assign(this, o);
  }
}
