import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class LocalStorageService {

  get(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }

    return null;
  }

  set(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

}
