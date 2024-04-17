import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from "../service/auth/token.service";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor (private tokenService: TokenService, private router: Router) { }

  canActivate(): boolean {
    const userAuthenticated = this.tokenService.hasValidToken();

    if (!userAuthenticated)
      this.router.navigate(['/home']).then();

    return userAuthenticated;
  }

}
