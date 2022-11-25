import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingPoliciesComponent } from './scheduling-policies.component';

describe('SchedulingPoliciesComponent', () => {
  let component: SchedulingPoliciesComponent;
  let fixture: ComponentFixture<SchedulingPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
