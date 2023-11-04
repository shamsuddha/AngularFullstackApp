export class DepartmentSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<DepartmentSearchDto>) {
    Object.assign(this, o);
  }
}
