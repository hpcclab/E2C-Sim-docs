import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingWorkloadComponent } from './generating-workload.component';

describe('GeneratingWorkloadComponent', () => {
  let component: GeneratingWorkloadComponent;
  let fixture: ComponentFixture<GeneratingWorkloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratingWorkloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratingWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
