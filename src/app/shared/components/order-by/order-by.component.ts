import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { OrderBy } from './order-by.model';

@Component({
  selector: 'app-order-by',
  standalone: true,
  imports: [],
  templateUrl: './order-by.component.html',
  styleUrl: './order-by.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => OrderByComponent),
      multi: true,
    },
  ],
})
export class OrderByComponent implements ControlValueAccessor {
  protected readonly options = [
    {
      value: OrderBy.None,
      label: 'Sem ordenação',
    },
    {
      value: OrderBy.Asc,
      label: 'A-Z',
    },
    {
      value: OrderBy.Desc,
      label: 'Z-A',
    },
  ];

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(_: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectionChange(value: any): void {
    this.onChange(value);
    this.onTouched();
  }
}
