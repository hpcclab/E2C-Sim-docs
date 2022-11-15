import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { InstallationComponent } from './sections/installation/installation.component';
import { GeneratingWorkloadComponent } from './sections/generating-workload/generating-workload.component';
import { ArrivalTimesComponent } from './sections/generating-workload/arrival-times/arrival-times.component';
import { ExamplesComponent } from './sections/generating-workload/examples/examples.component';
import { ScenariosComponent } from './sections/generating-workload/scenarios/scenarios.component';
import { TaskTypesComponent } from './sections/generating-workload/task-types/task-types.component';
import { WorkloadTracesComponent } from './sections/generating-workload/workload-traces/workload-traces.component';
import { QuickStartComponent } from './sections/quick-start/quick-start.component';
import { ReportsComponent } from './sections/reports/reports.component';
import { MachineReportComponent } from './sections/reports/machine-report/machine-report.component';
import { OverviewComponent } from './sections/reports/overview/overview.component';
import { TaskReportComponent } from './sections/reports/task-report/task-report.component';
import { SchedulingPoliciesComponent } from './sections/scheduling-policies/scheduling-policies.component';
import { SimulationComponent } from './sections/simulation/simulation.component';
import { Example1Component } from './sections/simulation/example1/example1.component';
import { Example2Component } from './sections/simulation/example2/example2.component';
import { MachineQueuesComponent } from './sections/simulation/machine-queues/machine-queues.component';
import { MachinesComponent } from './sections/simulation/machines/machines.component';
import { SchedulerComponent } from './sections/simulation/scheduler/scheduler.component';
import {NotfoundComponent} from './notfound/notfound.component' ; 
import { DevelopingPoliciesComponent } from './sections/scheduling-policies/developing-policies/developing-policies.component';
import { ExistingPoliciesComponent } from './sections/scheduling-policies/existing-policies/existing-policies.component';
import { RlPoliciyComponent } from './sections/scheduling-policies/rl-policiy/rl-policiy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SimOverviewComponent } from './sections/simulation/sim-overview/sim-overview.component';


const routes: Routes = [  
  {path:'about', component:AboutComponent},
  {path:'docs', component:SidebarComponent},
  {path:'', redirectTo:'about', pathMatch:'full'},   
  // {path:'docs', component:SidebarComponent},  
  {path:'installation', component:InstallationComponent},
  {path:'generating-workload/arrival-times', component:ArrivalTimesComponent},
  {path: 'generating-workload/examples', component: ExamplesComponent},
  {path: 'generating-workload/scenarios', component:ScenariosComponent},
  {path: 'generating-workload/task-types', component:TaskTypesComponent},
  {path: 'generating-workload/workload-traces', component:WorkloadTracesComponent},
  {path: 'quick-start', component:QuickStartComponent}, 
  {path:'reports/overview', component:OverviewComponent},
  {path: 'reports/task-report', component:TaskReportComponent},
  {path: 'reports/machine-report', component:MachineReportComponent},
  {path: 'scheduling-policies/developing-policies', component:DevelopingPoliciesComponent},
  {path: 'scheduling-policies/existing-policies', component:ExistingPoliciesComponent},
  {path: 'scheduling-policies/rl-policy', component:RlPoliciyComponent},
  {path:'simulation/overview', component:SimOverviewComponent},
  {path:'simulation/example1', component:Example1Component},
  {path:'simulation/example2', component:Example2Component},
  {path:'simualtion/machine-queues', component:MachineQueuesComponent},
  {path:'simulation/machines', component:MachinesComponent},
  {path:'simulation/scheduler', component:SchedulerComponent},
  {path:'**', component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
