import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {provideRouter, withComponentInputBinding, withDebugTracing} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {routes} from './app.routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withComponentInputBinding(),
      //bindToComponentInputs: true
      withDebugTracing(),
      //withRouterConfig({onSameUrlNavigation: 'reload'})
    ),
    importProvidersFrom(HttpClientModule),
  ]
};
