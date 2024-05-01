import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from "../service/auth/token.service";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor (private tokenService: TokenService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const userAuthenticated = await this.tokenService.hasValidToken();

    if (!userAuthenticated)
      this.router.navigate(['/auth/login']).then();

    return userAuthenticated;
  }

}
