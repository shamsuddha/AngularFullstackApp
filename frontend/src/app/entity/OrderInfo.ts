import { prop, propArray } from '@rxweb/reactive-form-validators';
import { OrderInfoDetail } from './OrderInfoDetail';

export class OrderInfo {

  @prop() id: number | null = null;
  @prop() code: string | null = null;
  @prop() receiverAddress: string | null = null;
  @prop() contactNumber: string | null = null;

  @propArray(OrderInfoDetail, {createBlank: false})
  orderInfoDetailList: Array<OrderInfoDetail> = [];

  constructor(o?: Partial<OrderInfo>) {
    Object.assign(this, o);
  }
}
