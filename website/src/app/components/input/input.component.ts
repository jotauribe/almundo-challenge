import {
  Component,
  OnInit,
  HostBinding,
  Input,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'am-input',
  template: `
    <input
      [(ngModel)]="value"
      class="am-input"
      [placeholder]="placeholder"
      [id]="id"
      [type]="type"
    />
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input()
  @HostBinding('attr.placeholder')
  placeholder = '';

  @Input()
  @HostBinding('attr.id')
  id = '';

  @Input()
  @HostBinding('attr.id')
  type = 'text';

  @ViewChild('input')
  input;

  val: any;

  @Input('value')
  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  get value() {
    return this.val;
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  writeValue(value: any): void {
    if (value) {
      this.val = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
