import {Injectable} from '@angular/core';

import {lastValueFrom, map} from "rxjs";
import {HttpService} from "../http/http.service";
import {Week} from "../../model/fit-track/week";

@Injectable({
  providedIn: 'root'
})
export class FitTrackService {

  constructor(private httpService: HttpService) { }

  getHistoricalWeeks(): Promise<Week[]> {
    return lastValueFrom(this.httpService
      .get('weeks')
      .pipe(map((response: any) => {
        const weeks = response["_embedded"].weeks;
        return weeks.map((week: any) => {
          return Week.convert(week);
        });
      })));
  }

  addWeek(newWeek: Week): Promise<Week> {
    return lastValueFrom(this.httpService
      .post('weeks', newWeek)
      .pipe(map(response => {
        console.log(response);
        return response;
      })
    ));
  }

}
