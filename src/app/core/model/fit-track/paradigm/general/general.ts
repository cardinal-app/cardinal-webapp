import {GeneralSession} from "./session/general-session";
import {Entity} from "../../../entity";

/**
 * General Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class General extends Entity {

  sessions: GeneralSession[] = [];

}
