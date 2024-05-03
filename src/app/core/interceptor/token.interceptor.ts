import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from "../service/auth/token.service";
import { host } from "../../../environments/environment";
import { inject } from "@angular/core";

/**
 * Http Interceptor that adds token to outbound requests
 *
 * @author J. R. Smith
 * @since 1st May 2024
 */
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(TokenService);
  const internal = req.url.includes(host);

  if (internal) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token.get()}` }
    });
  }

  return next(req);
};
