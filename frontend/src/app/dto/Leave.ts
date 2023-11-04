import { Employee } from "./Employee";
import { LeaveType } from "./LeaveType";

export class Leave {

  id: number | null = null;
  leaveType: LeaveType | null = null;
  employee: Employee | null = null;
  emergencyContact: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
  durationOfLeave: number | null = null;
  causeOfLeave: string | null = null;
  leaveStatus: boolean | null = null;
  approvedBy: Employee | null = null;
  
  constructor(o?: Partial<Leave>) {
    Object.assign(this, o);
  }
}
