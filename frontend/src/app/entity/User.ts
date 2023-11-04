import { Comment } from "./Comment";
import { Order } from "./Order";
import { Post } from "./Post";
import { Product } from "./Product";
import { Role } from "./Role";
import { Status } from "./Status";

export class User {
  id: number | null = null;
  userName: string | null = null;
  email: string | null = null;
  mobile: number | null = null;
  // employee or student
  roleList: Array<Role> | null = null;
  postList: Array<Post> | null = null;
  commentList: Array<Comment> | null = null;
  productList: Array<Product> | null = null;
  orderList: Array<Order> | null = null;
  statusList: Array<Status> | null = null;

  constructor(o?: Partial<User>) {
    Object.assign(this, o);
  }
}
