export class DivisionSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<DivisionSearchDto>) {
    Object.assign(this, o);
  }
}
