import { createAction, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites/favorites.reducer';
import { PhotoState } from './photos/photos.reducer';
import { Photo } from '../models/photos.model';

export interface AppState {
  photos: PhotoState;
  favorites: FavoritesState;
}

export const selectPhotos = (state: AppState) => state.photos;

export const selectPhotosList = createSelector(
  selectPhotos,
  (state: PhotoState) => state.photos
);

export const selectPhotosLength = createSelector(
  selectPhotosList,
  (photos: Photo[]) => photos.length
);

export const selectPhotosLoading = createSelector(
  selectPhotos,
  (state: PhotoState) => state.loading
);

export const selectPhotoById = (id: number) => (state: AppState) =>
  state.photos.photos.find((photo) => photo.id === id);

export const selectFavorites = (state: AppState) => state.favorites;

export const selectFavoritesList = createSelector(
  selectFavorites,
  (state: FavoritesState) => state.photos
);

export const selectFavoritesLength = createSelector(
  selectFavoritesList,
  (photos: Photo[]) => photos.length
);

export const selectPhotoExistsInFavorites = (id: number) =>
  createSelector(selectFavoritesList, (photos: Photo[]) =>
    photos.some((photo) => photo.id === id)
  );
