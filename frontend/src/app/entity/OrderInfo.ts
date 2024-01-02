import {prop, propArray} from '@rxweb/reactive-form-validators';
import {OrderInfoDetail} from './OrderInfoDetail';
import {AuditLog} from "./AuditLog";

export class OrderInfo extends AuditLog {

  @prop() id: number | null = null;
  @prop() code: string | null = null;
  @prop() receiverAddress: string | null = null;
  @prop() contactNumber: string | null = null;

  @propArray(OrderInfoDetail, {createBlank: false})
  orderInfoDetailList: Array<OrderInfoDetail> = [];

  constructor(o?: Partial<OrderInfo>) {
    super();
    Object.assign(this, o);
  }
}
