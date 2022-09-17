import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { AboutComponent } from './modules/sections/about/about.component';
import { InstallationComponent } from './modules/sections/installation/installation.component';
import { QuickStartComponent } from './modules/sections/quick-start/quick-start.component';
import { ReportingComponent } from './modules/sections/reporting/reporting.component';
import { SchedulingComponent } from './modules/sections/scheduling/scheduling.component';
import { SystemComponent } from './modules/sections/system/system.component';
import { WorkloadComponent } from './modules/sections/workload/workload.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'installation', component: InstallationComponent},
  {path: 'quick-start', component: QuickStartComponent},
  {path: 'reporting', component: ReportingComponent},
  {path: 'scheduling', component: SchedulingComponent},
  {path: 'system', component: SystemComponent},
  {path: 'workload', component: WorkloadComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
