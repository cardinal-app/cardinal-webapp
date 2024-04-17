import { Injectable } from '@angular/core';

import { lastValueFrom, map } from "rxjs";
import { HttpService } from "../http/http.service";
import { Week } from "../../model/fit-track/week";
import { environment } from "../../../../environments/environment";

const BASE_URL = environment.services.fitTrack.baseUrl;
const URI = environment.services.fitTrack.uri;

@Injectable({
  providedIn: 'root'
})
export class FitTrackService {

  constructor(private httpService: HttpService) { }

  getHistoricalWeeks(): Promise<Week[]> {
    return lastValueFrom(
      this.httpService.get(BASE_URL, URI.getWeeks)
        .pipe(map((response: any) => {
          const weeks = response["_embedded"].weeks;
          return weeks.map((week: any) => {
            return Week.convert(week);
          });
      })));
  }

  addWeek(newWeek: Week): Promise<Week> {
    return lastValueFrom(
      this.httpService.post(BASE_URL, URI.addWeek, newWeek)
        .pipe(map(response => {
          console.log(response);
          return response;
        })
    ));
  }

}
