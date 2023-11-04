export class DesignationSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<DesignationSearchDto>) {
    Object.assign(this, o);
  }
}
