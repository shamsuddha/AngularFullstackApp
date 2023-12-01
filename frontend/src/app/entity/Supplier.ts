import {
  prop, propArray,
} from '@rxweb/reactive-form-validators';

import {AuditLog} from "./AuditLog";

export class Supplier extends AuditLog{  

  @prop() id: number | null = null;
  @prop() name: string | null = null;

  
  constructor(o?: Partial<Supplier>) {
    super();
    Object.assign(this, o);
  }
}
