import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WagerFormComponent } from './wager-form.component';

describe('WagerFormComponent', () => {
  let component: WagerFormComponent;
  let fixture: ComponentFixture<WagerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WagerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
