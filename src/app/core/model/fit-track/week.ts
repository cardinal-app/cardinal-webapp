import {General} from "./paradigm/general/general";
import {Resistance} from "./paradigm/resistance/resistance";
import {Running} from "./paradigm/running/running";
import {Entity} from "../entity";

/**
 * Block Week Object
 * @author J. R. Smith
 * @since 28/11/2023
 */
export class Week extends Entity {

  block: number = 0;
  week: number = 0;
  weekCommencing: string = '';
  weekNotes: string = '';
  flags: string[] = [];
  general: General = new General();
  resistance: Resistance = new Resistance();
  running: Running = new Running();

}
