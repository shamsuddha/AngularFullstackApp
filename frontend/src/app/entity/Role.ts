import { prop } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";

export class Role {
  id: number | null = null;
  @prop() 
  name: string | null = null;
  // userInfoList: Array<UserInfo> | null = null;

  constructor(o?: Partial<Role>) {
    Object.assign(this, o);
  }
}
