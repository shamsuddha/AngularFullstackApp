export class CourseSearchDto {

  idList: Array<number> = [];

  constructor(o?: Partial<CourseSearchDto>) {
    Object.assign(this, o);
  }
}
