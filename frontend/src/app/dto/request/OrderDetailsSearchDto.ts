export class OrderDetailsSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<OrderDetailsSearchDto>) {
    Object.assign(this, o);
  }
}
