import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { HttpService } from "../http/http.service";
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";

const BASE_URL = environment.services.security.baseUrl;
const URI = environment.services.security.uri;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpService,
    private token: TokenService,
    private router: Router) { }

  /** Attempt to sign in a user to Cardinal with given credentials */
  async login(credentials: any) {
    await this.http.post(BASE_URL, URI.auth.login, credentials).subscribe(
      (res: any) => {
        const token = res.token;
        this.token.set(token);
      }
    );

    this.router.navigate(['/home']).then();
  }

  /** Attempt to register a new Cardinal user */
  async register() {
    this.http.post(BASE_URL, URI.auth.register, '');

    // Note :: then call login and redirect to /home
  }

  /** End the user session by removing token */
  logout() {
    this.token.remove();

    this.router.navigate(['/auth/login']).then();
  }

}
