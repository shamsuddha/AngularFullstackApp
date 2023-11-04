import { Course } from "./Course";
import { Department } from "./Department";
import { Designation } from "./Designation";
import { Salary } from "./Salary";
import { User } from "./User";

export class Teacher {

  id: number | null = null;
  firstName: string | null = null;
  lastName: number | null = null;
  localAddress: string | null = null;
  permanentAddress: string | null = null;
  department: Department | null = null;
  designation: Designation | null = null;
  coursesTeaching: Array<Course> | null = null;
  salary: Salary | null = null;
  user: User | null = null;
  constructor(o?: Partial<Teacher>) {
    Object.assign(this, o);
  }
}
