import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeList } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeList), 
    provideClientHydration(), 
    provideAnimationsAsync('noop'),
    provideHttpClient(withFetch()),
  ]
};
