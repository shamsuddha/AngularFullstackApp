export class BrandSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<BrandSearchDto>) {
    Object.assign(this, o);
  }
}
