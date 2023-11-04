import { Category } from "./Category";
import { Product } from "./Product";

export class Brand {

  id: number | null = null;
  name: string | null = null;
  code: string | null = null;
  category: Category | null = null;
  productList: Array<Product> | null = null;

  constructor(o?: Partial<Brand>) {
    Object.assign(this, o);
  }
}
