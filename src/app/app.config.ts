import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthModule, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),

    importProvidersFrom(
      AuthModule.forRoot({
        domain: environment.domainUrl,
        clientId: environment.clientId,
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
    ),
  ],
};
