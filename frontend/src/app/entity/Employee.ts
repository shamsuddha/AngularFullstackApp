import { prop, propObject } from "@rxweb/reactive-form-validators";
import { Division } from "./Division";
import { District } from "./District";
import { Upozila } from "./Upozila";

export class Employee {

  @prop() id: number | null = null;
  @prop() firstName: string | null = null;
  @prop() lastName: string | null = null;
  @prop() title: string | null = null;
  @prop() birthDate: Date | null = null;
  @prop() hireDate: Date | null = null;
  @prop() resignDate: Date | null = null;
  @prop() country: string | null = null;
  @prop() division: Division | null = null;
  @prop() divisionId: number | null = null;
  @prop() district: District | null = null;
  @prop() districtId: number | null = null;
  @prop() upozila: Upozila | null = null;
  @prop() upozilaId: number | null = null;
  @prop() address: string | null = null;  
  @prop() postalCode: string | null = null;
  @prop() homePhone: string | null = null;
  @prop() extension: string | null = null;
  @prop() photo: string | null = null;

  // @propObject(Category, {autoCreate: true})category: Category | null = null;
  
  constructor(o?: Partial<Employee>) {
    Object.assign(this, o);
  }
}
