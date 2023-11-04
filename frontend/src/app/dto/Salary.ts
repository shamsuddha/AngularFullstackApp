import { Designation } from "./Designation";
import { Employee } from "./Employee";

export class Salary {

  id: number | null = null;
  amount:number | null = null;
  designation: Designation | null = null;
  employee: Employee | null = null;

  constructor(o?: Partial<Salary>) {
    Object.assign(this, o);
  }
}
