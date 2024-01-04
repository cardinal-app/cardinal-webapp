import {RunningSession} from "./session/running-session";
import {Entity} from "../../../entity";

/**
 * Running Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class Running extends Entity {

  volume: number = 0;
  sessions: RunningSession[] = [];

}
