import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-no-favotires-message',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './no-favotires-message.component.html',
  styleUrl: './no-favotires-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoFavotiresMessageComponent {}
