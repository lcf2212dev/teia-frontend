import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  AppState,
  selectFavoritesLength,
  selectFavoritesList,
} from '../../store';
import { PhotoListComponent } from '../../shared/components/photo-list/photo-list.component';
import { CommonModule } from '@angular/common';
import { NoFavotiresMessageComponent } from './no-favotires-message/no-favotires-message.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    PhotoListComponent,
    NoFavotiresMessageComponent,
    PageHeaderComponent,
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  protected readonly title = 'Favoritas';
  protected readonly description = 'Veja as fotos que você mais gostou!';
  protected readonly photosLength$ = this.store.select(selectFavoritesLength);
  protected readonly photosList$ = this.store.select(selectFavoritesList);

  constructor(private store: Store<AppState>) {}
}
