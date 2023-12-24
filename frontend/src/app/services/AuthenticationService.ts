import {Injectable} from '@angular/core';
import {User} from '../models/User';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  currentUserValue: any;

  constructor() {
  }

  register(email: string, password: string) {
    return true;
  }

  login(email: string, password: string) {
    return true;
  }

  public currentUser(): any {
    return true;
  }

  logout() {
    // logout the user
    return true;
  }


}

