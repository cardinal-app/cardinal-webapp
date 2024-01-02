import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  hasValidAuthToken() {
    if (!!localStorage) {
      return !!localStorage.getItem('authToken');
    } else {
      return false;
    }
  }

}
