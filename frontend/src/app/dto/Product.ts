import { Brand } from "./Brand";
import { Category } from "./Category";
import { User } from "./User";

export class Product {

  id: number | null = null;
  name: string | null = null;
  code: string | null = null;
  price: string | null = null;
  category: Category | null = null;
  brand: Brand | null = null;
  addedBy: User | null = null;
  description: string | null = null;

  constructor(o?: Partial<Product>) {
    Object.assign(this, o);
  }
}
