import { StorageService } from "./storage.service";
import { Injectable } from "@angular/core";

/**
 * Service to interact with LocalStorge
 *
 * @author J. R. Smith
 * @since 3rd May 2024
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements StorageService {

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

  delete(key: string): void {
    localStorage.removeItem(key);
  }

}
