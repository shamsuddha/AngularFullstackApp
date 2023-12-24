import { NumericValueType, maxLength, minLength, numeric, prop, propArray, propObject, required, trim } from "@rxweb/reactive-form-validators";
import { UserInfo } from "./UserInfo";
import { AuditLog } from "./AuditLog";
export class Post extends AuditLog {

  @prop() id: number | null = null;
  @prop() title: string | null = null;
  @prop() body: string | null = null;
  
  // @One to many 
  @propArray(Comment, { createBlank: false })
  commentList: Array<Comment> = [];
  commentListSerde: Array<Comment> = [];

  // @Many to one
  @prop() user: UserInfo | null = null;
  @prop() userId: number | null = null;

  // @prop() 
  // @maxLength({value:10, message: 'Maximum 10 characters allowed'})
  // @minLength({value:3, message: 'Minimum 3 characters needed'})
  // @trim()
  // @required({message:'Name is required'})
  //  name: string | null = null;

  constructor(o?: Partial<Post>) {
    super();
    Object.assign(this, o);
  }
}
