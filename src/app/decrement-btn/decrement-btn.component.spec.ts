import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementBtnComponent } from './decrement-btn.component';

describe('DecrementBtnComponent', () => {
  let component: DecrementBtnComponent;
  let fixture: ComponentFixture<DecrementBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecrementBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecrementBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
