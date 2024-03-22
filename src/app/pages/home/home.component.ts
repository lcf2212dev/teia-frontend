import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectPhotosLength, selectPhotosList } from '../../store';
import { PhotoListComponent } from '../../shared/components/photo-list/photo-list.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotoListComponent, PageHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  protected readonly title = 'Home';
  protected readonly description = 'Veja as fotos mais incríveis da internet!';
  protected readonly photosLength$ = this.store.select(selectPhotosLength);
  protected readonly photosList$ = this.store.select(selectPhotosList);

  constructor(private store: Store<AppState>) {}
}
