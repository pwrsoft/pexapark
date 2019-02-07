import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/index';

import { Farm } from '../../models';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  @Input() farms: Farm[];
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
          this.change.emit(Number(value.farm));
    });
  }

  apply() {
    this.loadFarm.emit();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
