import { OrderDetail } from './OrderDetail';
import { UserInfo } from './UserInfo';

export class OrderInfo {

  id: number | null = null;
  receiver: UserInfo | null = null;
  orderDetailList: Array<OrderDetail> = [];

  constructor(o?: Partial<OrderInfo>) {
    Object.assign(this, o);
  }
}
