import { Department } from "./Department";
import { Designation } from "./Designation";
import { Leave } from "./Leave";
import { Salary } from "./Salary";
import { User } from "./User";

export class Employee {

  id: number | null = null;
  firstName: string | null = null;
  lastName: number | null = null;
  localAddress: string | null = null;
  permanentAddress: string | null = null;
  user: User | null = null;
  department: Department | null = null;
  designation: Designation | null = null;
  salary: Salary | null = null;
  leaveList: Array<Leave> | null = null;

  constructor(o?: Partial<Employee>) {
    Object.assign(this, o);
  }
}
