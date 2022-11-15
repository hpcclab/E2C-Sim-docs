import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTimesComponent } from './arrival-times.component';

describe('ArrivalTimesComponent', () => {
  let component: ArrivalTimesComponent;
  let fixture: ComponentFixture<ArrivalTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivalTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivalTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
