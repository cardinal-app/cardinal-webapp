import { Week } from "../../model/fit-track/week";

export class WeekUtil {

  /** Order a list of weeks by (block : week) */
  static order(unorderedWeeks: Week[]): Week[] {
    return unorderedWeeks.sort((a: Week, b: Week) => {
      return (a.block - b.block) || (a.week - b.week)
    });
  }

}


