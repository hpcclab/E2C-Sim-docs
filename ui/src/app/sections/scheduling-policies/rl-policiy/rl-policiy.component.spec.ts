import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlPoliciyComponent } from './rl-policiy.component';

describe('RlPoliciyComponent', () => {
  let component: RlPoliciyComponent;
  let fixture: ComponentFixture<RlPoliciyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlPoliciyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RlPoliciyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
