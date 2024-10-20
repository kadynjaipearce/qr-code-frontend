import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment.development';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),

    provideHttpClient(withInterceptors([authHttpInterceptorFn])),

    provideAuth0({
      domain: environment.domainUrl,
      clientId: environment.clientId,

      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: environment.audience,
      },

      httpInterceptor: {
        allowedList: environment.ApiEndpoints,
      },
    }),
  ],
};
