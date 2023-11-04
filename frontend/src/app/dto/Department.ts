import { Course } from "./Course";
import { Designation } from "./Designation";
import { Employee } from "./Employee";
import { Student } from "./Student";

export class Department {

  id: number | null = null;
  name: string | null = null;
  studentList: Array<Student> = [];
  employeeList: Array<Employee> = [];
  courseList: Array<Course> = [];

  constructor(o?: Partial<Department>) {
    Object.assign(this, o);
  }
}
