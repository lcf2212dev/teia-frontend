import { createReducer, on } from '@ngrx/store';
import { Photo } from '../../models/photos.model';
import * as PhotosReducerActions from './photos.action';

export interface PhotoState {
  photos: Photo[];
  loading: boolean;
}

export const initialState: PhotoState = {
  photos: [],
  loading: false,
};

export const photosReducer = createReducer(
  initialState,
  on(PhotosReducerActions.getPhotos, (state) => ({ ...state, loading: true })),
  on(PhotosReducerActions.getPhotosSuccess, (state, res) => ({
    ...state,
    photos: res.photos,
    loading: false,
  }))
);
