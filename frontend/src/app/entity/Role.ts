import { User } from "./User";

export class Role {
  id: number | null = null;
  name: string | null = null;
  userList: Array<User> | null = null;

  constructor(o?: Partial<Role>) {
    Object.assign(this, o);
  }
}
