import { HttpInterceptorFn } from '@angular/common/http';
import { StorageUtil } from "../util/storage/storage.util";
import { host } from "../../../environments/environment";

/**
 * Http Interceptor that adds token to outbound requests
 *
 * @author J. R. Smith
 * @since 1st May 2024
 */
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = StorageUtil.get('token');
  const internal = req.url.includes(host);

  if (internal) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};
