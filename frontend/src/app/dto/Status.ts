import { User } from "./User";

export class Status {

  id: number | null = null;
  body: string | null = null;
  user: User | null = null;
  createdDateTime: string | null = null;  // `yyyy-MM-dd HH:mm:ss


  constructor(o?: Partial<Status>) {
    Object.assign(this, o);
  }
}
