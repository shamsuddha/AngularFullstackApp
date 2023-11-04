export class StatusSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<StatusSearchDto>) {
    Object.assign(this, o);
  }
}
