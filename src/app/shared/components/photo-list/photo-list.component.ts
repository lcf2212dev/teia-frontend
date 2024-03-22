import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrderBy } from '../order-by/order-by.model';
import { BehaviorSubject, Observable, combineLatest, startWith } from 'rxjs';
import { Photo } from '../../../models/photos.model';
import { CommonModule } from '@angular/common';
import { OrderByComponent } from '../order-by/order-by.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { PhotoCardComponent } from '../photo-card/photo-card.component';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotoCardComponent,
    PaginatorComponent,
    OrderByComponent,
  ],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoListComponent implements OnInit {
  @Input({ required: true }) photosLength$!: Observable<number>;
  @Input({ required: true }) photosList$!: Observable<any>;
  protected readonly pageSize = 20;
  protected readonly orderBy = new FormControl<OrderBy>(OrderBy.None);
  private readonly pageIndex$ = new BehaviorSubject<number>(0);
  protected photosListOrdered$!: Observable<Photo[]>;
  protected photosSlice$!: Observable<Photo[]>;

  ngOnInit(): void {
    this.photosListOrdered$ = combineLatest(
      [
        this.photosList$,
        this.orderBy.valueChanges.pipe(startWith(OrderBy.None)),
      ],
      (photos, orderBy) => this.orderPhotos(photos, orderBy!)
    );

    this.photosSlice$ = combineLatest(
      [this.pageIndex$, this.photosListOrdered$],
      (index, photos) => {
        return photos.slice(this.getStartItem(index), this.getEndItem(index));
      }
    );
  }

  private orderPhotos(photos: Photo[], orderBy: OrderBy): Photo[] {
    if (orderBy === 'asc') {
      return [...photos].sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    }

    if (orderBy === 'desc') {
      return [...photos].sort((a, b) =>
        a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
      );
    }

    return photos;
  }

  private getStartItem(index: number): number {
    return index * this.pageSize;
  }

  private getEndItem(index: number): number {
    return index * this.pageSize + this.pageSize;
  }

  pageIndexChange(index: number): void {
    this.pageIndex$.next(index);
  }
}
