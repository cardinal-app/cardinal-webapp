import {Entity} from "../../../../../accessory/model/entity";

/**
 * Exercise Object
 * @author J. R. Smith
 * @since 14/12/2023
 */
export class Exercise extends Entity {

  name: string = '';
  setReps: number[] = [];
  resistance: number[] = [];
  notes: string = '';

}
