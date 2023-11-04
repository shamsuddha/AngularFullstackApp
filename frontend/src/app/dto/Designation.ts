import { Department } from "./Department";
import { Salary } from "./Salary";

export class Designation {

  id: number | null = null;
  name: string | null = null;
  department: Department | null = null;

  constructor(o?: Partial<Designation>) {
    Object.assign(this, o);
  }
}
