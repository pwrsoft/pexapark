import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Farm } from '../../models';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() farms: Farm[];
  @Input() disabled: boolean;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();
  @Output() loadFarm: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.fb.group({
    farm: null
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit() {
    this.form
        .valueChanges
        .subscribe((value: any) => {
          if (value.farm !== 'null') {
            this.change.emit(Number(value.farm));
          }
    });
  }

  apply() {
    this.loadFarm.emit();
  }
}
