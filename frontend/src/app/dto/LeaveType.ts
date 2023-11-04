export class LeaveType {

  id: number | null = null;
  name: string | null = null;
  duration: number | null = null;

  constructor(o?: Partial<LeaveType>) {
    Object.assign(this, o);
  }
}
