import {Entity} from "../../../../../core/model/entity";

/**
 * Running Session Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class RunningSession extends Entity {

  type: string = '';
  dataPoints: string[] = [];

}
