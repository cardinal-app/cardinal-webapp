import { Entity } from "./entity";

/**
 * Authorisation Token Class
 *
 * @author J. R. Smith
 * @since 17th April 2024
 */
export class Token extends Entity {
  sub: string = '';
  exp: number = 0;
  iat: number = 0;
  userId: number = 0;
}
