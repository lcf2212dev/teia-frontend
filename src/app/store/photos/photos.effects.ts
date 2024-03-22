import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, map, catchError, EMPTY } from 'rxjs';
import { PhotosService } from '../../services/photos.service';
import * as PhotosReducerActions from './photos.action';

@Injectable()
export class PhotosEffects {
  getPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotosReducerActions.getPhotos),
      exhaustMap(() =>
        this.photosService.getPhotos().pipe(
          map((photos) => PhotosReducerActions.getPhotosSuccess({ photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private photosService: PhotosService
  ) {}
}
