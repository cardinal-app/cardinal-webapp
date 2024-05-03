import { APP_URI } from '../app/app.uri';

export const host = 'localhost';
export const url = (port: string) => `http://${host}:${port}`;

export const environment = {
  logLevel: 'INFO',
  cookies: false,
  services: {
    fitTrack: {
      baseUrl: url('8080'),
      uri: APP_URI.fitTrack
    },
    security: {
      baseUrl: url('8010'),
      uri: APP_URI.security
    }
  }
};
