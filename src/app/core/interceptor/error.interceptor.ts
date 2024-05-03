import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs";
import { inject } from "@angular/core";
import { AuthenticationService } from "../service/auth/authentication.service";

/**
 * Http Interceptor that triggers on errored requests
 *
 * @author J. R. Smith
 * @since 1st May 2024
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthenticationService);

  return next(req).pipe(catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {

        switch (err.status) {
          case 400:
            // TODO :: log -> Bad Request!
            // broadcast.raise()?
            break;

          case 401:
            // TODO :: log -> Unauthorised!
            auth.logout();
            // broadcast.raise()?
            break;

          case 403:
            // TODO :: log -> Forbidden! Insufficient privilege
            // broadcast.raise()?
            break;

          case 404:
            // TODO :: log -> Not Found! Service is down or has different url...
            // broadcast.raise()?
            break;

        }
      }

      return throwError(() => err);
    })
  );
};
