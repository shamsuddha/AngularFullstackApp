export class TeacherSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<TeacherSearchDto>) {
    Object.assign(this, o);
  }
}
