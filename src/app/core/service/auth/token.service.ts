import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { StorageUtil } from "../../util/storage/storage.util";
import { Token } from "../../model/token";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: WritableSignal<null | string> = signal(null);
  private decoded: Signal<null | Token> = computed(() => this.decode(this.token()));

  constructor() { }

  /** Set authentication token in local storage */
  set(token: string): void {
    StorageUtil.set('token', token);
  }

  /** Determine if user is signed in by presence of valid token */
  hasValidToken(): boolean {
    this.token.update(token => StorageUtil.get('token'));

    const tokenEmpty = !this.decoded();
    if (tokenEmpty) return false;

    return this.hasValidExpiry(); // && this.hasValidSignature();
  }

  /** Logout user by removing token from local storage */
  removeToken(): void {
    StorageUtil.remove('token');
  }

  /** Determine if a token has a valid signature */
  private hasValidSignature(): boolean {
    return true
    // Call sec-svc/token/validate....
  }

  /** Determine if a token is yet to expire */
  private hasValidExpiry(): boolean {
    const expiry = new Date(1000 * this.decoded()!.exp);
    const now = new Date();
    return expiry.getTime() > now.getTime();
  }

  /** Decode an authorisation token */
  private decode(token: string | null): Token | null {
    if (!token) return null

    const decoded: any = jwtDecode(token);
    /** TODO :: how to verify... using secret (bad idea) :: speak to DAN re auth... or Paul on Monday... see diagram (then write up on MIRO and test it out...)
     * is the model to soft force a login but require any actions to be authenticated on the backend (dumb client?)
     *
     * Have a go at breaking this without hasValidSig...
     * With just expiry I can force entry to /fit-track...
     * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE4MzQ5Njc4OTB9.H_r9p5ppIZPi3FUQoN2XfA-MGfO2a3yurNErUnw6iNo
     * TokenFilter -> Servlet Exception should throw 401's (not 500) for faulty token...
     */
    return Token.convert(decoded);
  }

}
