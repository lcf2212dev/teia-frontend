import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, EMPTY } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import * as FavoritesActions from './favorites.action';

@Injectable()
export class FavoritesEffects {
  loadPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.loadPhotos),
      exhaustMap(() => {
        const photos = this.photosService.getFavoritePhotos();
        return photos
          ? [FavoritesActions.loadPhotosSuccess({ photos })]
          : EMPTY;
      })
    )
  );

  addPhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.addPhoto),
      exhaustMap((action) => {
        this.photosService.addPhotoToFavorites(action.photo);
        return [FavoritesActions.loadPhotos()];
      })
    )
  );

  removePhoto$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoritesActions.removePhoto),
      exhaustMap((action) => {
        this.photosService.removePhotoFromFavorites(action.photo);
        return [FavoritesActions.loadPhotos()];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}
}
