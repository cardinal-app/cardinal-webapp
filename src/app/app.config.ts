import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimations } from '@angular/platform-browser/animations';
import { tokenInterceptor } from "./core/interceptor/token.interceptor";
import { unauthorisedInterceptor } from "./core/interceptor/unauthorised.interceptor";
import { StorageService} from "./core/service/storage/storage.service";
import { environment } from "../environments/environment";
import { DatastoreService } from "./core/service/storage/datastore.service";
import { LocalStorageService } from "./core/service/storage/local-storage.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenInterceptor, unauthorisedInterceptor])),
    provideAnimations(),

    { provide: StorageService, useClass: environment.datastore ? DatastoreService : LocalStorageService }
  ]
};
