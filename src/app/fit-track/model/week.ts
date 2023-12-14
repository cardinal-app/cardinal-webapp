import {Misc} from "./paradigm/misc/misc";
import {Resistance} from "./paradigm/resistance/resistance";
import {Running} from "./paradigm/running/running";

/**
 * Block Week Object
 * @author J. R. Smith
 * @since 28/11/2023
 */
export class Week {
  block: number = 0;
  week: number = 0;
  weekCommencing: string = '';
  flags: string[] = [];
  misc: Misc = new Misc();
  resistance: Resistance = new Resistance();
  running: Running = new Running();

  convert(session: any) {
    this.block = session.block;
    this.week = session.week;
    this.weekCommencing = session.weekCommencing;
    this.flags = session.flags;
    this.misc = session.misc;
    this.resistance = session.resistance;
    this.running = session.running;

    return this;
  }

}
