import { APP_URI } from '../app/app.uri';

export const environment = {
  logLevel: 'ERROR',
  services: {
    fitTrack: {
      baseUrl: 'https://fit-track.cardinal.jrsmth.io',
      uri: APP_URI.fitTrack
    },
    security: {
      baseUrl: 'https://security.cardinal.jrsmth.io',
      uri: APP_URI.security
    }
  }
};
