import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decrement-btn',
  templateUrl: './decrement-btn.component.html',
  styleUrls: ['./decrement-btn.component.css'],
})
export class DecrementBtnComponent implements OnInit {
  @Output decrement: EventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  minusClicked() {
    this.decrement.emit(null);
  }
}
