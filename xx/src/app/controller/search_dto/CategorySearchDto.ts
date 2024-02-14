export class CategorySearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<CategorySearchDto>) {
    Object.assign(this, o);
  }
}