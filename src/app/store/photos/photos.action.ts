import { createAction, props } from '@ngrx/store';
import { Photo } from '../../models/photos.model';

export const getPhotos = createAction('[Photos] Get Photos');

export const getPhotosSuccess = createAction(
  '[Photos] Get Photos Success',
  props<{ photos: Photo[] }>()
);
