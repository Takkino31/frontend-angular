 import {
  ActivatedRouteSnapshot,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthorizationGuard{

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let authorized : boolean = false;
    // let authorizedRoles: string[] = route.data['roles'];
    // let roles: string[]= this.authService.roles;
    // for (let i = 0; i < roles.length; i++) {
    //   if (authorizedRoles.includes(roles[i])){
    //     authorized = true;
    //   }
    // }
    if (this.authService.roles.includes('ADMIN')) authorized = true
    return authorized;
  }
}
