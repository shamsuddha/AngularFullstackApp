export class DistrictSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<DistrictSearchDto>) {
    Object.assign(this, o);
  }
}
