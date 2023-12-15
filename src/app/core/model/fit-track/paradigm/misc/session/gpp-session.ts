import {Entity} from "../../../../entity";

/**
 * GPP Session Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class GPPSession extends Entity {

  day: string = '';
  press: number = 0;
  pull: number = 0;
  full: boolean = false;

}
