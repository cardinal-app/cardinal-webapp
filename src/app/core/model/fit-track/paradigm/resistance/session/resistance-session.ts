import {Exercise} from "./exercise";
import {Entity} from "../../../../entity";

/**
 * Resistance Session Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class ResistanceSession extends Entity {

  focus: string = '';
  exercises: Exercise[] = [];

}
