import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './AuthenticationService';
import {FakeAuthenticationService} from './FakeAuthenticationService';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private fakeAuthenticationService: FakeAuthenticationService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (environment.defaultauth === 'firebase') {
      const currentUser = this.authenticationService.currentUser();
      if (currentUser) {
        // logged in so return true
        return true;
      }
    } else {
      const currentUser = this.fakeAuthenticationService.currentUserValue;
      if (currentUser) {
        // logged in so return true
        return true;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/account/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
