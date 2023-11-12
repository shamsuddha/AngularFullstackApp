import { prop, propArray } from "@rxweb/reactive-form-validators";


export class UserInfoRole {
  
  @prop()
  id: number | null = null;
  @prop()
  userInfo_id: number | null = null;
  @prop()
  role_id: number | null = null;

  constructor(o?: Partial<UserInfoRole>) {
    Object.assign(this, o);
  }
}
