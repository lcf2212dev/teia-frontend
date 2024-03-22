import { createAction, props } from '@ngrx/store';
import { Photo } from '../../models/photos.model';

export const loadPhotos = createAction('[Favorites] Load Photos');

export const loadPhotosSuccess = createAction(
  '[Favorites] Load Photos Success',
  props<{ photos: Photo[] }>()
);

export const addPhoto = createAction(
  '[Favorites] Add Photo',
  props<{ photo: Photo }>()
);

export const removePhoto = createAction(
  '[Favorites] Remove Photo',
  props<{ photo: Photo }>()
);
