import { prop, propObject } from "@rxweb/reactive-form-validators";
import { Category } from "./Category";
import { Product } from "./Product";

export class Brand {

  @prop() id: number | null = null;
  @prop() name: string | null = null;
  @prop() code: string | null = null;
  // @propObject(Category, {autoCreate: true})category: Category | null = null;
  
  constructor(o?: Partial<Brand>) {
    Object.assign(this, o);
  }
}
