import { Department } from "./Department";
import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class Course {

  id: number | null = null;
  name: string | null = null;
  code: string | null = null;
  details: string | null = null;
  studentList: Array<Student> = [];
  teacherList: Array<Teacher> = [];
  department: Department | null = null;


  constructor(o?: Partial<Course>) {
    Object.assign(this, o);
  }
}
