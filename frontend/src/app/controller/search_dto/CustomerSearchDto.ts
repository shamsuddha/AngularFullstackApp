import { prop } from "@rxweb/reactive-form-validators";
import { SearchDto } from "./SearchDto";

export class CustomerSearchDto extends SearchDto {

  @prop() name: string | null = null;
  @prop() districtId: number | null = null;

  constructor(o?: Partial<CustomerSearchDto>) {
    super();
    Object.assign(this, o);
  }
}
