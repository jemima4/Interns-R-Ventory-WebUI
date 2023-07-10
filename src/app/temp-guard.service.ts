import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TempGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authService.isAuthenticated().then((authenticated: any) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(['auth']);
        return false;
      }
    });
  }
}
