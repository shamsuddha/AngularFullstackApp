import { Comment } from "./Comment";
import { User } from "./User";

export class Post {

  id: number | null = null;
  title:string | null = null;
  body: string | null = null;
  user: User | null = null;
  commentList: Array<Comment> | null = null;
  createdDateTime: string | null = null;  // `yyyy-MM-dd HH:mm:ss

  constructor(o?: Partial<Post>) {
    Object.assign(this, o);

  }
}
