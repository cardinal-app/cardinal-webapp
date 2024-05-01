import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable } from "rxjs";
import { HttpUtil } from "../../util/http/http.util";

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {}

  get(baseUrl: string, path: string, params?: any, pathVariables?: any): Observable<any> {
    const url = baseUrl + path;
    const headers = new HttpHeaders();

    return this.http
      .get(url, { headers: headers })
      .pipe(catchError(HttpUtil.handleError));
  }

  post(baseUrl: string, path: string, body: any, params?: any, pathVariables?: any): Observable<any> {
    const url = baseUrl + path;
    const headers = new HttpHeaders();

    return this.http
      .post(url, body, { headers: headers })
      .pipe(catchError(HttpUtil.handleError));
  }

}
