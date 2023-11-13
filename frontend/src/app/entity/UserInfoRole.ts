import { prop, propArray, propObject } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { Role } from "./Role";


export class UserInfoRole {

  @prop()
  id: number | null = null;
  @prop()
  userInfo_id: number | null = null;
  @prop()
  role_id: number | null = null;

  // @propObject(UserInfo, { autoCreate: true }) userInfo: UserInfo | null = null;
  // @propObject(Role, { autoCreate: true }) role: Role | null = null;

  constructor(o?: Partial<UserInfoRole>) {
    Object.assign(this, o);
  }
}
