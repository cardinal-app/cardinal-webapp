import {Injectable} from '@angular/core';
import {HttpService} from "../core/http/http.service";

import {lastValueFrom, map, Observable} from "rxjs";
import {Week} from "./model/week";

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
        return weeks.map((week: any) => {
          return new Week().convert(week);
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
