export class RoomSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<RoomSearchDto>) {
    Object.assign(this, o);
  }
}
