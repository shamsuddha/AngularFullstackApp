export class LeaveTypeSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<LeaveTypeSearchDto>) {
    Object.assign(this, o);
  }
}
