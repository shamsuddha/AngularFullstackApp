export class OrderSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<OrderSearchDto>) {
    Object.assign(this, o);
  }
}
