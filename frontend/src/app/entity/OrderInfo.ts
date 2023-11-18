import { OrderInfoDetail } from './OrderInfoDetail';
import { UserInfo } from './UserInfo';

export class OrderInfo {

  id: number | null = null;
  receiver: UserInfo | null = null;
  orderInfoDetailList: Array<OrderInfoDetail> = [];

  constructor(o?: Partial<OrderInfo>) {
    Object.assign(this, o);
  }
}
