import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopingPoliciesComponent } from './developing-policies.component';

describe('DevelopingPoliciesComponent', () => {
  let component: DevelopingPoliciesComponent;
  let fixture: ComponentFixture<DevelopingPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopingPoliciesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
