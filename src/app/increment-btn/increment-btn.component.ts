import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment-btn',
  templateUrl: './increment-btn.component.html',
  styleUrls: ['./increment-btn.component.css'],
})
export class IncrementBtnComponent implements OnInit {
  @Output() increment: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  plusClicked(): any {
    this.increment.emit(null);
  }
}
