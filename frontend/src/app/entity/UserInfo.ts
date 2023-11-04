import {
  NumericValueType,
  maxLength,
  minLength,
  numeric,
  pattern,
  prop,
  propArray,
  propObject,
  required,
  trim,
} from '@rxweb/reactive-form-validators';
import { Vehicle } from './Vehicle';
import { Address } from './Address';

export class UserInfo {  // FormGroup

  @prop() id: number | null = null; // FormControl
  @propObject(Vehicle, { autoCreate: true }) vehicle: Vehicle | null = null; // FormGroup
  @propArray(Address, { createBlank: true }) addressList: Array<Address> = []; // FormArray


  @prop()
  @minLength({ value: 3, message: 'Minimum 3 character required' })
  @maxLength({ value: 10, message: 'Minimum 10 character allowed' })
  // @pattern({
  //   expression: {
  //     atLeastOneUpperCaseAndLowerCaseLatter: /(?=.*[a-z])(?=.*[A-Z])/gm,
  //   },
  // })
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false,})
  @trim()
  @required({ message: 'name is required'})
  name: string | null = null;

  @prop() email: string | null = null;
  @prop() mobile: number | null = null;

  //  @prop() roleList: Array<Role> = [];
  //  @prop() postList: Array<Post> = [];
  //  @prop() commentList: Array<Comment> = [];
  //  @prop() productList: Array<Product> = [];
  //  @prop() orderList: Array<Order> = [];
  //  @prop() statusList: Array<Status> = [];

  constructor(o?: Partial<UserInfo>) {
    Object.assign(this, o);
  }
}
