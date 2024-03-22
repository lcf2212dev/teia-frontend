import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getPhotos } from './store/photos/photos.action';
import { loadPhotos } from './store/favorites/favorites.action';
import { HeaderComponent } from './layout/header/header.component';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getPhotos());
    this.store.dispatch(loadPhotos());
  }
}
