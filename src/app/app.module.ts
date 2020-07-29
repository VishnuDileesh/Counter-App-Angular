import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';
import { IncrementBtnComponent } from './increment-btn/increment-btn.component';
import { DecrementBtnComponent } from './decrement-btn/decrement-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayCounterComponent,
    IncrementBtnComponent,
    DecrementBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
