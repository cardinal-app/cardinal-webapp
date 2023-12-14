import {AuxiliarySession} from "./session/auxiliary-session";
import {MiscSession} from "./session/misc-session";
import {GPPSession} from "./session/gpp-session";
import {Entity} from "../../../../core/model/entity";

/**
 * Misc. Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class Misc extends Entity {

  weekNotes: string = '';
  auxiliaries: AuxiliarySession[] = [];
  gpp: GPPSession[] = [];
  sessions: MiscSession[] = [];

}
