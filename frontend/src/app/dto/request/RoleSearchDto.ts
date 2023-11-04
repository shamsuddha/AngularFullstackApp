export class RoleSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<RoleSearchDto>) {
    Object.assign(this, o);
  }
}
