import {
  NumericValueType,
  maxLength,
  minLength,
  numeric,
  pattern,
  prop,
} from '@rxweb/reactive-form-validators';

export class Vehicle {
  // FormGroup

  @prop() id: number | null = null; // FormControl
  @prop() name: string | null = null; // FormControl

  constructor(o?: Partial<Vehicle>) {
    Object.assign(this, o);
  }
}
