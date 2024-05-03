import { Injectable } from '@angular/core';
import { TokenService } from "../service/auth/token.service";
import { AuthenticationService } from "../service/auth/authentication.service";

@Injectable({providedIn: 'root'})
export class AuthGuard {

  constructor (private tokenService: TokenService, private auth: AuthenticationService) { }

  async canActivate(): Promise<boolean> {
    const userAuthenticated = await this.tokenService.hasValidToken();

    if (!userAuthenticated)
      this.auth.logout();

    return userAuthenticated;
  }

}
