import { OrderInfo } from "./OrderInfo";
import { Product } from "./Product";

export class OrderInfoDetail {

  id: number | null = null;
  product: Product | null = null;
  amount: number | null = null;
  price: number | null = null;
  orderInfo: OrderInfo | null = null;

  constructor(o?: Partial<OrderInfoDetail>) {
    Object.assign(this, o);
  }
}
