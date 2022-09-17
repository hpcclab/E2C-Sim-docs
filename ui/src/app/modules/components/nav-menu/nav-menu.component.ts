import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  sections: Array<any> = [
    {"title": "What is E2C-Sim?", "link": "about"},
    {"title": "Quick Start", "link": "quick-start"},
    {"title": "Installation Guide", "link": "installation", "sublinks": [
      {"subtitle": "Windows", "id": "windows-install"},
      {"subtitle": "MacOS", "id": "mac-install"},
      {"subtitle": "Linux", "id": "linux-install"}
    ]},
    {"title": "Generating Workload", "link": "workload", "sublinks": [
      {"subtitle": "Defining a Scenario", "id": "define-scenario"},
      {"subtitle": "Defining Task Types", "id": "task-types"},
      {"subtitle": "Setting Arrival Times", "id": "arrival-times"},
      {"subtitle": "Generating a Workload Trace", "id": "workload-trace"},
      {"subtitle": "Example: Loading a Pre-Existing Trace", "id": "example1"}
    ]},
    {"title": "Simulating a Computing System", "link": "system", "sublinks": [
      {"subtitle": "Defining Machines", "id": "define-machines"},
      {"subtitle": "Machines' Configuration", "id": "machine-config","subsublinks": [
        {"subsubtitle": "Heterogeneity vs Homogeneity", "id": "heter-v-homo"},
        {"subsubtitle": "Expected Execution Time (EET) Matrix", "id": "eet-matrix"}
      ]},
      {"subtitle": "Scheduler", "id": "scheduler"},
      {"subtitle": "Machine Queues", "id": "machine-queues"},
      {"subtitle": "Example 1: Loading a Pre-Existing Homogeneous Edge", "id": "example1"},
      {"subtitle": "Example 2: Loading a Pre-Existing Heterogeneous Edge", "id": "example2"}
    ]},
    {"title": "Scheduling Policies", "link": "scheduling", "sublinks": [
      {"subtitle": "Describing Existing Policies", "id": "default-policies"},
      {"subtitle": "Developing a New Policy", "id": "new-policy"},
      {"subtitle": "Example: Developing RR Scheduler", "id": "example1"}
    ]},
    {"title": "Reporting", "link": "reporting", "sublinks": [
      {"subtitle": "Task Report", "id": "task-report"},
      {"subtitle": "Machine Report", "id": "machine-report"},
      {"subtitle": "Full Report", "id": "full-report"}
    ]},
  ]

  constructor(
    private router: Router,) { }

  ngOnInit(): void {}

  navigate(link: string): void{
    this.router.navigateByUrl(link);
  }

  tagnav(link: string, tag: string): void{
    this.router.navigate([link], {fragment: tag});
  }

  currentRoute(link: string): boolean{
    console.log(this.router.url)
    return this.router.url.includes(link);
  }

}
