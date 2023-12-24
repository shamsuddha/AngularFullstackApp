export class User {

  id: number | null = null;
  username: string | null = null;
  password: string | null = null;
  firstName: string | null = null;
  lastName: string | null = null;
  token: string | null = null;
  email: string | null = null;


  constructor(o?: Partial<User>) {
    Object.assign(this, o);
  }
}
