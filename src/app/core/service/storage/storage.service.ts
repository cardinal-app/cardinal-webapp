
/**
 * A (Near) Interface for Client-Side Storage Interactions
 *
 * @author J. R. Smith
 * @since 3rd May 2024
 */
export abstract class StorageService {

  /** Retrieve the value for a given key */
  abstract get(key: string): string | null;

  /** Set the value for a given key */
  abstract set(key: string, value: string): void;

  /** Delete the value for a given key */
  abstract delete(key: string): void;

}
