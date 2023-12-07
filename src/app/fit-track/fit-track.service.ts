import {Injectable} from '@angular/core';
import {HttpService} from "../core/http/http.service";
import {Week} from "../model/week";
import {lastValueFrom, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FitTrackService {

  constructor(private httpService: HttpService) { }

  getHistoricalWeeks(): Observable<Week[]> {
    return this.httpService
      .get('weeks')
      .pipe(map(response => {
        const weeks = response["_embedded"].weeks;
        return weeks.map((week: any) => {
          return new Week().convert(week);
        });
      }));
  }

  addWeek(newWeek: Week): Observable<Week> {
    return this.httpService
      .post('weeks', newWeek)
      .pipe(map(response => {
        console.log(response);
        return response;
      })
    );
  }

}
