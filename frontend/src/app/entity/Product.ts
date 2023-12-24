import { NumericValueType, maxLength, minLength, numeric, prop, propArray, propObject, required, trim } from "@rxweb/reactive-form-validators";
import { Category } from "./Category";

export class Product {

  @prop() id: number | null = null;
  @prop() productName: string | null = null;
  @prop() productCode: string | null = null;
  @prop() unitPrice: number | null = null;
  @prop() unitsInStock: number | null = null;
  @prop() unitsOnOrder: number | null = null;
  @prop() description: string | null = null;
  @prop() coverImage: string | null = null;
  @prop() galleryImage1: string | null = null;
  @prop() galleryImage2: string | null = null;
  @prop() galleryImage3: string | null = null;

  @prop() category: Category | null = null;
  @prop() categoryId: number | null = null;

  // @propObject(UserInfo, { autoCreate: true }) userInfo: UserInfo | null = null;
  // @propObject(Supplier, { autoCreate: true }) supplier: Supplier | null = null;
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
