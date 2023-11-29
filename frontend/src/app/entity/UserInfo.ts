import {
  NumericValueType, maxLength, minLength, numeric, pattern,
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import { Address } from './Address';
import { Role } from './Role';
import { UserInfoRole } from './UserInfoRole';
import {AuditLog} from "./AuditLog";

export class UserInfo extends AuditLog{  // FormGroup

  @prop() id: number | null = null; // FormControl
  // @prop()
  // @minLength({ value: 3, message: 'Minimum 3 character required' })
  // @maxLength({ value: 10, message: 'Maximum 10 character allowed' })
  // @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false,})
  // @trim()
  // @required({ message: 'name is required'})
  @prop() name: string | null = null;
  @prop() email: string | null = null;
  @prop() mobile: number | null = null;

  @propArray(UserInfoRole, {createBlank: false})
  userInfoRoleList: Array<UserInfoRole> = [];
  // @propObject(Brand, { autoCreate: true }) brand: Brand | null = null;
  constructor(o?: Partial<UserInfo>) {
    super();
    Object.assign(this, o);
  }
}
