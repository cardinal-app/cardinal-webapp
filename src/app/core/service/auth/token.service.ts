import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { StorageUtil } from "../../util/storage/storage.util";
import { Token } from "../../model/token";

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

    return this.hasValidSignature() && this.hasValidExpiry();
  }

  /** Logout user by removing token from local storage */
  removeToken(): void {
    StorageUtil.remove('token');
  }

  /** Determine if a token has a valid signature */
  private hasValidSignature(): boolean {
    return true
  }

  /** Determine if a token is yet to expire */
  private hasValidExpiry(): boolean {
    const token = this.decoded()!
    const expiry = new Date(1000 * token.exp);
    return expiry.getTime() > new Date().getTime();
  }

  /** Decode an authorisation token */
  private decode(token: string | null): Token | null {
    if (!token) return null

    const decoded: any = {};
    /** TODO :: how to verify... using secret (bad idea)
     * is the model to soft force a login but require any actions to be authenticated on the backend (dumb client?)
     */
    return Token.convert(decoded);
  }

}
