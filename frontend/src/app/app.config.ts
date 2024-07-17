import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { UserFeature } from './state/user/user-feature';
import { provideEffects } from '@ngrx/effects';
import { loadUser } from './state/user/get-user.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    //provideRouter(routes, withDebugTracing()), // NOTES: Helps provide some extra information if routing is not working
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideState(UserFeature),
    provideStoreDevtools(), // TODO; Only do this in dev mode
    provideEffects({ x: loadUser }),
  ],
};
