import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from '../../../models/photos.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './photo-card.component.html',
  styleUrl: './photo-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent {
  @Input({ required: true }) photo!: Photo;
}
