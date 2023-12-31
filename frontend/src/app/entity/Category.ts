import { prop, propArray } from "@rxweb/reactive-form-validators";
import { Product } from "./Product";

export class Category {

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  @prop() code: string | null = null;

  @propArray(Product, {createBlank: false})
  productList: Array<Product> = [];
  productListSerde: Array<Product> = [];

  // @propArray(Brand, {createBlank: true}) brandList: Array<Brand> = [];
  // @propArray(Product, {createBlank:true}) productList: Array<Product> = [];

  constructor(o?: Partial<Category>) {
    Object.assign(this, o);
  }
}
