import { Order } from "./Order";
import { Product } from "./Product";

export class OrderDetail {

  id: number | null = null;
  product: Product | null = null;
  amount: number | null = null;
  price: number | null = null;
  order: Order | null = null;

  constructor(o?: Partial<OrderDetail>) {
    Object.assign(this, o);
  }
}
