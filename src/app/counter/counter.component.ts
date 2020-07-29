import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  counterValue: number = 0;

  constructor() {}

  ngOnInit(): void {}

  plusToCounter(event) {
    this.counterValue += 1;
  }

  minusToCounter(event) {
    this.counterValue -= 1;
  }
}
