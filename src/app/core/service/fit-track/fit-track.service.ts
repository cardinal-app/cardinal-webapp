import { Injectable } from '@angular/core';

import { lastValueFrom, map } from "rxjs";
import { HttpService } from "../http/http.service";
import { Week } from "../../model/fit-track/week";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FitTrackService {

  private baseUrl: string;
  private uri: any;

  constructor(private httpService: HttpService) {
    this.baseUrl = environment.services.fitTrack.baseUrl;
    this.uri = environment.services.fitTrack.uri;

  }

  getHistoricalWeeks(): Promise<Week[]> {
    return lastValueFrom(
      this.httpService.get(this.baseUrl, this.uri.getWeeks)
        .pipe(map((response: any) => {
          const weeks = response["_embedded"].weeks;
          return weeks.map((week: any) => {
            return Week.convert(week);
          });
      })));
  }

  addWeek(newWeek: Week): Promise<Week> {
    return lastValueFrom(
      this.httpService.post(this.baseUrl, this.uri.addWeek, newWeek)
        .pipe(map(response => {
          console.log(response);
          return response;
        })
    ));
  }

}
