export class ProductSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<ProductSearchDto>) {
    Object.assign(this, o);
  }
}
