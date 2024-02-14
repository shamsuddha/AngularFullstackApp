import { NumericValueType, maxLength, minLength, numeric, prop, propArray, required, trim } from "@rxweb/reactive-form-validators";


export class Category {

  @prop() id: number | null = null;
  @prop()
  @minLength({ value: 3, message: 'Minimum 3 character required' })
  @maxLength({ value: 10, message: 'Maximum 10 character allowed' })
  @numeric({ acceptValue: NumericValueType.PositiveNumber, allowDecimal: false, })
  @trim()
  @required({ message: 'name is required' })
  category_name: string | null = null;
  @prop() description: string | null = null;
  @prop() picture: string | null = null;

  // @propArray(Product, {createBlank: false})
  // productList: Array<Product> = [];
  // productListSerde: Array<Product> = [];

  // @propArray(Brand, {createBlank: true}) brandList: Array<Brand> = [];
  // @propArray(Product, {createBlank:true}) productList: Array<Product> = [];

  constructor(o?: Partial<Category>) {
    Object.assign(this, o);
  }
}
