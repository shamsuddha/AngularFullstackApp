import { prop, propArray } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { UserInfoRole } from "./UserInfoRole";

export class Role {
  
  @prop()
  id: number | null = null;
  @prop() 
  name: string | null = null;
  // userInfoList: Array<UserInfo> | null = null;
  @propArray(UserInfoRole)
  userInfoRoleList: Array<UserInfoRole> = [];

  constructor(o?: Partial<Role>) {
    Object.assign(this, o);
  }
}
