export class PostSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<PostSearchDto>) {
    Object.assign(this, o);
  }
}
