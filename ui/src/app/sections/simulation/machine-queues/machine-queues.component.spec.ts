import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineQueuesComponent } from './machine-queues.component';

describe('MachineQueuesComponent', () => {
  let component: MachineQueuesComponent;
  let fixture: ComponentFixture<MachineQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineQueuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MachineQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
