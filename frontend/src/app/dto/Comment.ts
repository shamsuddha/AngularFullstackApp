import { Post } from "./Post";
import { User } from "./User";

export class Comment {

  id: number | null = null;
  body: string | null = null;
  user: User | null = null;
  post: Post | null = null;
  createdDateTime: string | null = null;  // `yyyy-MM-dd HH:mm:ss

  constructor(o?: Partial<Comment>) {
    Object.assign(this, o);
  }
}
