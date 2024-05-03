import { APP_URI } from '../app/app.uri';

export const host = 'jrsmth.cardinal.io';
export const url = (service: string) => `https://${service}.${host}`;

export const environment = {
  production: true,
  logLevel: 'ERROR',
  datastore: false,
  services: {
    fitTrack: {
      baseUrl: url('fit-track'),
      uri: APP_URI.fitTrack
    },
    security: {
      baseUrl: url('security'),
      uri: APP_URI.security
    }
  }
};
