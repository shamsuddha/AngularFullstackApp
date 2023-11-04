export class LeaveSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<LeaveSearchDto>) {
    Object.assign(this, o);
  }
}
