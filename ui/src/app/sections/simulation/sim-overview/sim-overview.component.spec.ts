import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimOverviewComponent } from './sim-overview.component';

describe('SimOverviewComponent', () => {
  let component: SimOverviewComponent;
  let fixture: ComponentFixture<SimOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
