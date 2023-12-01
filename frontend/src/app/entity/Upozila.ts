import {
  prop, propArray, propObject, required, trim,
} from '@rxweb/reactive-form-validators';
import { AuditLog } from "./AuditLog";

export class Upozila extends AuditLog {

  @prop() id: number | null = null;
  @prop() name: string | null = null;

  constructor(o?: Partial<Upozila>) {
    super();
    Object.assign(this, o);
  }
}