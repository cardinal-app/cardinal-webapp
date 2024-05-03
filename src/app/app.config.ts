import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import { authInterceptor } from "./core/interceptor/auth.interceptor";
import { errorInterceptor } from "./core/interceptor/error.interceptor";
import { StorageService} from "./core/service/storage/storage.service";
import { environment } from "../environments/environment";
import { CookiesService } from "./core/service/storage/cookies.service";
import { LocalStorageService } from "./core/service/storage/local-storage.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    provideAnimations(),

    { provide: StorageService, useClass: environment.cookies ? CookiesService : LocalStorageService }
  ]
};
