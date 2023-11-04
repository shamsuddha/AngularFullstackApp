export class StudentSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<StudentSearchDto>) {
    Object.assign(this, o);
  }
}
