import { Brand } from "./Brand";
import { Product } from "./Product";

export class Category {

  id: number | null = null;
  name: string | null = null;
  brandList: Array<Brand> = [];
  productList: Array<Product> = [];

  constructor(o?: Partial<Category>) {
    Object.assign(this, o);
  }
}
