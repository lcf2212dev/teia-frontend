import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectPhotoById,
  selectPhotoExistsInFavorites,
} from '../../store';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photos.model';
import { CommonModule } from '@angular/common';
import { addPhoto, removePhoto } from '../../store/favorites/favorites.action';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailComponent implements OnInit {
  protected readonly title = 'Detalhes da Foto';
  protected photo$?: Observable<Photo>;
  protected isFavorite$?: Observable<boolean>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const photoId = Number(params.get('id'));

      this.photo$ = this.store.select(
        selectPhotoById(photoId)
      ) as Observable<Photo>;

      this.isFavorite$ = this.store.select(
        selectPhotoExistsInFavorites(photoId)
      );
    });
  }

  protected addToFavorites(photo: Photo): void {
    this.store.dispatch(addPhoto({ photo }));
  }

  protected removeFromFavorites(photo: Photo): void {
    this.store.dispatch(removePhoto({ photo }));
  }
}
