import { Injectable } from '@angular/core';
import { HttpService } from "../core/http/http.service";
import { Week } from "../model/week";
import { lastValueFrom, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FitTrackService {

  constructor(private httpService: HttpService) { }

  getHistoricalWeeks(): Promise<Week[]> {
    return lastValueFrom(this.httpService
      .get('weeks')
      .pipe(map(response => {
        const weeks = response["_embedded"].weeks;
        const convertedWeeks = weeks.map((week: any) => {
          return new Week().convert(week);
        });

        const orderedWeeks = convertedWeeks.sort((a: Week, b: Week) => {
          return (b.block - a.block) || (b.week - a.week)
        });
        console.log(orderedWeeks); // TODO :: add logging...

        return orderedWeeks;
      })));
  }

  addWeek(newWeek: Week): Promise<Week> {
    return lastValueFrom(this.httpService
      .post('weeks', newWeek)
      .pipe(map(response => {
        console.log(response);
        return response;
      }))
    );
  }

}
