export class SalarySearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<SalarySearchDto>) {
    Object.assign(this, o);
  }
}
