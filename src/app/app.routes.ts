import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./pages/favorites/favorites.component').then(
        (m) => m.FavoritesComponent
      ),
  },
  {
    path: 'photo/:id',
    loadComponent: () =>
      import('./pages/photo-detail/photo-detail.component').then(
        (m) => m.PhotoDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
