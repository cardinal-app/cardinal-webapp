import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../service/auth/authentication-service";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor (private authService: AuthenticationService, private router: Router) {}

  canActivate(): boolean {
    const userAuthenticated = this.authService.hasValidAuthToken();

    if (!userAuthenticated) {
      this.router.navigate(
        ['/auth']
      );
    }

    return userAuthenticated;
  }

}
