import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetTrackerComponent } from './bet-tracker.component';

describe('BetTrackerComponent', () => {
  let component: BetTrackerComponent;
  let fixture: ComponentFixture<BetTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
