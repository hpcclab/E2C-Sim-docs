import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingPoliciesComponent } from './existing-policies.component';

describe('ExistingPoliciesComponent', () => {
  let component: ExistingPoliciesComponent;
  let fixture: ComponentFixture<ExistingPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
