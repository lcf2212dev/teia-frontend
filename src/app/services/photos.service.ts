import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photos.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  static readonly API_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private readonly http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(PhotosService.API_URL);
  }

  getFavoritePhotos(): Photo[] {
    const photos = localStorage.getItem('photos');
    return photos ? JSON.parse(photos) : [];
  }

  addPhotoToFavorites(photo: Photo): void {
    const photos = this.getFavoritePhotos();
    const photoAlreadyExists = photos.find((p) => p.id === photo.id);
    if (!photoAlreadyExists) {
      photos.push(photo);
    }
    localStorage.setItem('photos', JSON.stringify(photos));
  }

  removePhotoFromFavorites(photo: Photo): void {
    const photos = this.getFavoritePhotos();
    const photoIndex = photos.findIndex((p) => p.id === photo.id);
    if (photoIndex !== -1) {
      photos.splice(photoIndex, 1);
      localStorage.setItem('photos', JSON.stringify(photos));
    }
  }
}
