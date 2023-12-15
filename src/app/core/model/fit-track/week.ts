import {Misc} from "./paradigm/misc/misc";
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
  flags: string[] = [];
  misc: Misc = new Misc();
  resistance: Resistance = new Resistance();
  running: Running = new Running();

}
