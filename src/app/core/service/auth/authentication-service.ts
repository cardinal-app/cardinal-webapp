import { Injectable } from "@angular/core";
import { LocalStorageService } from "../storage/local-storage-service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private localStorage: LocalStorageService) {}

  hasValidToken() {
    return !!this.localStorage.get('authToken');
  }

  removeToken(): void {
    this.localStorage.remove('authToken');
  }

}
