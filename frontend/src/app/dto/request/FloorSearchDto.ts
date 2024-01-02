export class FloorSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<FloorSearchDto>) {
    Object.assign(this, o);
  }
}
