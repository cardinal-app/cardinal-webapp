import { Pipe, PipeTransform } from "@angular/core";
import { Week } from "../model/fit-track/week";
import { WeekUtil } from '../util/week/week.util';

@Pipe({
  standalone: true,
  name: 'orderWeeks'
})
export class OrderWeeksPipe implements PipeTransform {

  transform(unorderedWeeks: Week[]): Week[] {
    return WeekUtil.order(unorderedWeeks);
  }

}
