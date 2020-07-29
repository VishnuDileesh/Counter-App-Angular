import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DisplayCounterComponent } from './display-counter/display-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
