import { Injectable } from '@angular/core';
import { Token } from "../../model/token";
import { jwtDecode } from "jwt-decode";
import { environment } from "../../../../environments/environment";
import { HttpService } from "../http/http.service";
import { lastValueFrom, map } from "rxjs";
import { StorageService } from "../storage/storage.service";

const BASE_URL = environment.services.security.baseUrl;
const URI = environment.services.security.uri;

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpService, private storage: StorageService) { }

  /** Retrieve authentication token */
  get(): string {
    const token = this.storage.get('token');
    const empty = !token;

    return empty ? '' : token as string;
  }

  /** Set authentication token in storage */
  set(token: string): void {
    this.storage.set('token', token);
  }

  /** Determine if user is signed in by presence of valid token */
  async hasValidToken(): Promise<boolean> {
    const tokenEmpty = !this.get();
    if (tokenEmpty) return false;

    return this.hasValidExpiry() && await this.hasValidSignature();
    // Question :: is interceptor going to take care of this anyway?
    //  -> yes, 403's will redirect to /login but for completeness I'll leave this in (conduct performance experiment)
    // Acknowledge this in documentation.

    /** TODO :: how to verify... using secret (bad idea) :: speak to DAN re auth... or Paul on Monday... see diagram (then write up on MIRO and test it out...)
     * is the model to soft force a login but require any actions to be authenticated on the backend (dumb client?)
     *
     * Have a go at breaking this without hasValidSig...
     * With just expiry I can force entry to /fit-track...
     * TOKEN with maxed out expiry
     * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjk5OTk5OTk5OTk5OX0.RAXPOm19cHn5mG7fSyo1K6wamKUX8XXzKsLKpz_Lb3I
     * TokenFilter -> Servlet Exception should throw 401's (not 500) for faulty token...
     */
  }

  /** Delete token from storage */
  remove(): void {
    this.storage.delete('token');
  }

  /** Determine if a token has a valid signature */
  private async hasValidSignature(): Promise<boolean> {
    return lastValueFrom(
      this.http.get(BASE_URL, URI.token.validate, '')
        .pipe(map(response => {
          return response.valid;
        }))
    );
  }

  /** Determine if a token is yet to expire */
  private hasValidExpiry(): boolean {
    const decoded: Token = this.decode ?? new Token();
    // Note :: ?? -> "Nullish coalescing operator"

    const expiry = new Date(1000 * decoded.exp);
    const now = new Date();

    return expiry.getTime() > now.getTime();
  }

  /** Get the decoded authorisation token */
  private get decode(): Token | null {
    const token = this.get();
    if (!token) return null

    try {
      const decoded: any = jwtDecode(token);
      return Token.convert(decoded);

    } catch (err) {
      return null
    }
  }

}
