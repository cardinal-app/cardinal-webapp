import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { HttpService } from "../http/http.service";
import { environment } from "../../../../environments/environment";

const BASE_URL = environment.services.security.baseUrl;
const URI = environment.services.security.uri;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpService, private tokenService: TokenService) { }

  /** Attempt to sign in a user to Cardinal with given credentials */
  async login() {
    this.http.post(BASE_URL, URI.auth.login, '');

    this.tokenService.set('a_token')

    // Note :: in login component, redirect to /home
  }

  /** Attempt to register a new Cardinal user */
  async register() {
    this.http.post(BASE_URL, URI.auth.register, '');

    // Note :: in registration component, call login and redirect to /home
  }

  /** End the user session */
  logout() {
    this.tokenService.removeToken();

    // Note :: in component, redirect to /home
  }

}
