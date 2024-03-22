import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [BackButtonComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() showBackButton = false;
}
