import {OrderInfo} from "./OrderInfo";
import {Product} from "./Product";
import {AuditLog} from "./AuditLog";
import { prop, propArray } from '@rxweb/reactive-form-validators';

export class OrderInfoDetail extends AuditLog {

  @prop() id: number | null = null;
  @prop() code: string | null = null;
  @prop() product: Product | null = null;
  @prop() amount: number | null = null;
  @prop() price: number | null = null;
  @prop() orderInfo: OrderInfo | null = null;

  constructor(o?: Partial<OrderInfoDetail>) {
    super();
    Object.assign(this, o);
  }
}
