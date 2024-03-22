import { createReducer, on } from '@ngrx/store';
import { Photo } from '../../models/photos.model';
import * as FavoritesActions from './favorites.action';

export interface FavoritesState {
  photos: Photo[];
}

export const initialState: FavoritesState = {
  photos: [],
};

export const favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.loadPhotosSuccess, (state, res) => ({
    ...state,
    photos: res.photos,
  }))
);
