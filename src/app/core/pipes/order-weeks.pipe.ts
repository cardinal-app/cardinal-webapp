import {Pipe, PipeTransform} from "@angular/core";
import {Week} from "../../model/week";

@Pipe({
  standalone: true,
  name: 'orderWeeks'
})
export class OrderWeeksPipe implements PipeTransform {

  transform(unorderedWeeks: Week[], args?: any): any {
    const orderedWeeks = unorderedWeeks.sort((a: Week, b: Week) => {
      return (a.block - b.block) || (a.week - b.week) // FixMe :: not working properly...
    });

    console.log(orderedWeeks);
    return orderedWeeks;
  }

}
