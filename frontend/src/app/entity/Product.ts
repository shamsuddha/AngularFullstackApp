import { NumericValueType, maxLength, minLength, numeric, prop, propArray, propObject, required, trim } from "@rxweb/reactive-form-validators";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { OrderInfoDetail } from "./OrderInfoDetail";
import { UserInfo } from "./UserInfo";
import { Supplier } from "./Supplier";

export class Product {

  @prop() id: number | null = null;
  @prop() productName: string | null = null;
  @prop() productCode: string | null = null;
  @prop() unitPrice: number | null = null;
  @prop() unitsInStock: number | null = null;
  @prop() unitsOnOrder: number | null = null;
  @prop() reorderLevel: string | null = null;
  @prop() discontinued: string | null = null;
  @propObject(Category, { autoCreate: true }) category: Category | null = null;
  @propArray(OrderInfoDetail, {createBlank: false})
  orderInfoDetailList: Array<OrderInfoDetail> = [];
  orderInfoDetailListSerde: Array<OrderInfoDetail> = [];
  @propObject(UserInfo, { autoCreate: true }) userInfo: UserInfo | null = null;
  @propObject(Supplier, { autoCreate: true }) supplier: Supplier | null = null;
  @prop() description: string | null = null;
  // @prop() 
  // @maxLength({value:10, message: 'Maximum 10 characters allowed'})
  // @minLength({value:3, message: 'Minimum 3 characters needed'})
  // @trim()
  // @required({message:'Name is required'})
  //  name: string | null = null;

  constructor(o?: Partial<Product>) {
    Object.assign(this, o);
  }
}
