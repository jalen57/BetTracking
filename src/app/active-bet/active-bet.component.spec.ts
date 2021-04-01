import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveBetComponent } from './active-bet.component';

describe('ActiveBetComponent', () => {
  let component: ActiveBetComponent;
  let fixture: ComponentFixture<ActiveBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
