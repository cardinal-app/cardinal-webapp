import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export class HttpUtil {

  static handleError(error: HttpErrorResponse) { // TODO :: extend & unit test
    if (error.status === 0) {
      console.error('Client-side or network error occurred:', error.error); // TODO :: log it...

    } else {
      console.error('Backend error occurred:', error.error); // TODO :: log it...

      console.trace('Response code processing to be handled by interceptor'); // TODO :: log it...
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
