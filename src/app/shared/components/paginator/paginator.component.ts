import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Output() pageIndexChange = new EventEmitter<number>();
  @Input({ required: true }) length!: number;
  @Input({ required: true }) pageSize!: number;
  pageIndex = signal<number>(0);

  protected readonly hasFirstPage = computed(() => this.pageIndex() > 0);

  protected readonly hasPreviousPage = computed(() => this.pageIndex() > 0);

  protected readonly hasNextPage = computed(
    () => this.pageIndex() < this.length / this.pageSize - 1
  );

  protected readonly hasLastPage = computed(
    () => this.pageIndex() < this.length / this.pageSize - 1
  );

  protected readonly start = computed(() => this.pageIndex() * this.pageSize);

  protected readonly end = computed(() =>
    this.start() + this.pageSize > this.length
      ? this.length
      : this.start() + this.pageSize
  );

  protected readonly showPaginator = computed(
    () => this.length > this.pageSize
  );

  protected firstPage(): void {
    this.pageIndex.set(0);
    this.emitIndexChange();
  }

  protected previousPage(): void {
    this.pageIndex.set(this.pageIndex() - 1);
    this.emitIndexChange();
  }

  protected nextPage(): void {
    this.pageIndex.set(this.pageIndex() + 1);
    this.emitIndexChange();
  }

  protected lastPage(): void {
    this.pageIndex.set(Math.floor(this.length / this.pageSize) - 1);
    this.emitIndexChange();
  }

  private emitIndexChange(): void {
    this.pageIndexChange.emit(this.pageIndex());
  }
}
