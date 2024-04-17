
/**
 * Utility to interact with LocalStorage
 *
 * @author J. R. Smith
 * @since 17th April 2024
 */
export class StorageUtil {

  /** Get the value from LocalStorage for a given key */
  static get(key: string): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }

    return null;
  }

  /** Set the value in LocalStorage for a given key */
  static set(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  /** Delete the value in LocalStorage for a given key */
  static remove(key: string): void {
    localStorage.removeItem(key);
  }

}
