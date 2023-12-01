export class UpozilaSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<UpozilaSearchDto>) {
    Object.assign(this, o);
  }
}
