import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { photosReducer } from './store/photos/photos.reducer';
import { PhotosEffects } from './store/photos/photos.effects';
import { provideHttpClient } from '@angular/common/http';
import { favoritesReducer } from './store/favorites/favorites.reducer';
import { FavoritesEffects } from './store/favorites/favorites.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ photos: photosReducer, favorites: favoritesReducer }),
    provideEffects([PhotosEffects, FavoritesEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
