import { APP_URI } from '../app/app.uri';

export const environment = {
  logLevel: 'ERROR',
  services: {
    fitTrack: {
      baseUrl: 'https://fitness-tracker-f55a.onrender.com',
      uri: APP_URI.fitTrack
    }
  }
};
