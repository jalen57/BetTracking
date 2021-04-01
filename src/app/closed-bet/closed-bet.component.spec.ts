import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedBetComponent } from './closed-bet.component';

describe('ClosedBetComponent', () => {
  let component: ClosedBetComponent;
  let fixture: ComponentFixture<ClosedBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
