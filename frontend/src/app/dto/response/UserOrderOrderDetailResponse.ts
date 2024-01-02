export class UserOrderOrderDetailResponse {

  userId: number | null = null;
  userName: string | null = null;
  orderId: string | null = null;

  constructor(o?: Partial<UserOrderOrderDetailResponse>) {
    Object.assign(this, o);
  }
}
