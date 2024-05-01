import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from "rxjs";

/**
 * Http Interceptor that triggers upon unauthorised responses
 *
 * @author J. R. Smith
 * @since 1st May 2024
 */
export const unauthorisedInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {

        switch (err.status) {
          case 401:
            console.log('REDIRECT TO LOGIN!');
            // TODO :: bin the token if exists and redirect to login...
            break;

          // Question :: should handle other err codes?
        }
      }

      return throwError(() => err);
    })
  );
};

