import { NumericValueType, maxLength, minLength, numeric, prop, propObject, required, trim } from "@rxweb/reactive-form-validators";
import { Brand } from "./Brand";
import { Category } from "./Category";

export class Product {

  @prop() id: number | null = null;
  @prop() 
  @maxLength({value:10, message: 'Maximum 10 characters allowed'})
  @minLength({value:3, message: 'Minimum 3 characters needed'})
  @trim()
  @required({message:'Name is required'})
  name: string | null = null;
  @prop() 
  @required({message:'Code is required'})
  code: string | null = null;
  @prop() 
  @numeric({acceptValue:NumericValueType.PositiveNumber, allowDecimal:false,})
  @required({message:'Price is required'})
  price: number | null = null;
  @propObject(Category, { autoCreate: true }) category: Category | null = null;
  @propObject(Brand, { autoCreate: true }) brand: Brand | null = null;
  @prop() description: string | null = null;

  constructor(o?: Partial<Product>) {
    Object.assign(this, o);
  }
}
