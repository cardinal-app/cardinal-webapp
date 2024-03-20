import { Week } from "../../model/fit-track/week";
import { WeekUtil } from "./week.util";
import { expect } from '@jest/globals';

describe('Week Util Spec', () => {

  it('should return a list of weeks ordered by (block : week)', () => {
    /** Given */
    const weekA = Week.convert({block: 9, week: 5});
    const weekB = Week.convert({block: 10, week: 4});
    const weekC = Week.convert({block: 10, week: 6});

    const orderedWeeks = [weekA, weekB, weekC];
    const unorderedWeeks = [weekC, weekA, weekB];

    /** When */
    const result = WeekUtil.order(unorderedWeeks);

    /** Then */
    expect(result).toStrictEqual(orderedWeeks);
  })
});
