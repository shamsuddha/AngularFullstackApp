import { prop, propArray } from "@rxweb/reactive-form-validators";


export class UserInfoRole {
  id: number | null = null;


  constructor(o?: Partial<UserInfoRole>) {
    Object.assign(this, o);
  }
}
