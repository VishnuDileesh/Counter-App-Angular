import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment-btn',
  templateUrl: './increment-btn.component.html',
  styleUrls: ['./increment-btn.component.css'],
})
export class IncrementBtnComponent implements OnInit {
  @Output increment: EventEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  plusClicked() {
    this.increment.emit(null);
  }
}
