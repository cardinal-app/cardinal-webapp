import { APP_URI } from '../app/app.uri';

export const environment = {
  logLevel: 'INFO',
  services: {
    fitTrack: {
      baseUrl: 'http://localhost:8080',
      uri: APP_URI.fitTrack
    }
  }
};
