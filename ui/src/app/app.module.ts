import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionsComponent } from './sections/sections.component';
import { InstallationComponent } from './sections/installation/installation.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QuickStartComponent } from './sections/quick-start/quick-start.component';
import { GeneratingWorkloadComponent } from './sections/generating-workload/generating-workload.component';
import { ScenariosComponent } from './sections/generating-workload/scenarios/scenarios.component';
import { TaskTypesComponent } from './sections/generating-workload/task-types/task-types.component';
import { ArrivalTimesComponent } from './sections/generating-workload/arrival-times/arrival-times.component';
import { WorkloadTracesComponent } from './sections/generating-workload/workload-traces/workload-traces.component';
import { ExamplesComponent } from './sections/generating-workload/examples/examples.component';
import { SimulationComponent } from './sections/simulation/simulation.component';
import { MachinesComponent } from './sections/simulation/machines/machines.component';
import { SchedulerComponent } from './sections/simulation/scheduler/scheduler.component';
import { MachineQueuesComponent } from './sections/simulation/machine-queues/machine-queues.component';
import { Example1Component } from './sections/simulation/example1/example1.component';
import { Example2Component } from './sections/simulation/example2/example2.component';
import { SchedulingPoliciesComponent } from './sections/scheduling-policies/scheduling-policies.component';
import { ExistingPoliciesComponent } from './sections/scheduling-policies/existing-policies/existing-policies.component';
import { DevelopingPoliciesComponent } from './sections/scheduling-policies/developing-policies/developing-policies.component';
import { RlPoliciyComponent } from './sections/scheduling-policies/rl-policiy/rl-policiy.component';
import { ReportsComponent } from './sections/reports/reports.component';
import { OverviewComponent } from './sections/reports/overview/overview.component';
import { TaskReportComponent } from './sections/reports/task-report/task-report.component';
import { MachineReportComponent } from './sections/reports/machine-report/machine-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SimOverviewComponent } from './sections/simulation/sim-overview/sim-overview.component';
import { FullReportComponent } from './sections/reports/full-report/full-report.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SectionsComponent,
    InstallationComponent,
    AboutComponent,
    NotfoundComponent,
    QuickStartComponent,
    GeneratingWorkloadComponent,
    ScenariosComponent,
    TaskTypesComponent,
    ArrivalTimesComponent,
    WorkloadTracesComponent,
    ExamplesComponent,
    SimulationComponent,
    MachinesComponent,
    SchedulerComponent,
    MachineQueuesComponent,
    Example1Component,
    Example2Component,
    SchedulingPoliciesComponent,
    ExistingPoliciesComponent,
    DevelopingPoliciesComponent,
    RlPoliciyComponent,
    ReportsComponent,
    OverviewComponent,
    TaskReportComponent,
    MachineReportComponent,
    FooterComponent,
    SimOverviewComponent,
    FullReportComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,       
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

