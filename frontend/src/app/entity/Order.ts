import { OrderDetail } from './OrderDetail';
import { User } from './User';

export class Order {

  id: number | null = null;
  receiver: User | null = null;
  receiverAddress: string | null = null;
  extraContactNumber: number | null = null;
  orderedBy: User | null = null;

  orderDetailList: Array<OrderDetail> = [];

  constructor(o?: Partial<Order>) {
    Object.assign(this, o);
  }
}
