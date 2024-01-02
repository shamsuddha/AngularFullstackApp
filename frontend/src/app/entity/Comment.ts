import { NumericValueType, maxLength, minLength, numeric, prop, propArray, propObject, required, trim } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { Post } from "./Post";
export class Comment {

  @prop() id: number | null = null;
  @prop() body: string | null = null;
  // @many to one
  @prop() post: Post | null = null;
  @prop() postId: number | null = null;

  // @Many to one
  @prop() user: UserInfo | null = null;
  @prop() userId: number | null = null;

  // @prop() 
  // @maxLength({value:10, message: 'Maximum 10 characters allowed'})
  // @minLength({value:3, message: 'Minimum 3 characters needed'})
  // @trim()
  // @required({message:'Name is required'})
  //  name: string | null = null;

  constructor(o?: Partial<Comment>) {
    Object.assign(this, o);
  }
}
