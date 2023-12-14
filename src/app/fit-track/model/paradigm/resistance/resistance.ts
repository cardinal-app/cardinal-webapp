import {ResistanceSession} from "./session/resistance-session";
import {Entity} from "../../../../core/model/entity";

/**
 * Resistance Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class Resistance extends Entity {

  sessions: ResistanceSession[] = [];

}
