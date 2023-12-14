import {RunningSession} from "./session/running-session";
import {Volume} from "./volume";
import {Entity} from "../../../../accessory/model/entity";

/**
 * Running Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class Running extends Entity {

  volume: Volume = new Volume();
  sessions: RunningSession[] = [];

}
