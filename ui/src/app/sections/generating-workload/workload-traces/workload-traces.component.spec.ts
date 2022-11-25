import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkloadTracesComponent } from './workload-traces.component';

describe('WorkloadTracesComponent', () => {
  let component: WorkloadTracesComponent;
  let fixture: ComponentFixture<WorkloadTracesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkloadTracesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkloadTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
