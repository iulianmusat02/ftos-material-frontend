import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return this.authService.isAuthenticated().pipe(
        map((resp: any) => {
          if (resp.authentication) {
            localStorage['authentication'] = true;
            return(true)
          } else {
            localStorage['authentication'] = false; 
            return this.router.parseUrl('/login'); 
          }
        })
      );
    }
  }
