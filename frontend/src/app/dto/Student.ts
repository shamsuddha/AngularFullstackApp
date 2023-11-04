import { Course } from "./Course";
import { Department } from "./Department";
import { User } from "./User";

export class Student {

  id: number | null = null;
  firstName: string | null = null;
  lastName: number | null = null;
  localAddress: string | null = null;
  permanentAddress: string | null = null;
  department: Department | null = null;
  course: Array<Course> | null = null;
  user: User | null = null;

  constructor(o?: Partial<Student>) {
    Object.assign(this, o);
  }
}
