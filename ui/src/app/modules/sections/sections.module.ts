import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { QuickStartComponent } from './quick-start/quick-start.component';
import { InstallationComponent } from './installation/installation.component';
import { WorkloadComponent } from './workload/workload.component';
import { SystemComponent } from './system/system.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { ReportingComponent } from './reporting/reporting.component';



@NgModule({
  declarations: [
    AboutComponent,
    QuickStartComponent,
    InstallationComponent,
    WorkloadComponent,
    SystemComponent,
    SchedulingComponent,
    ReportingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
