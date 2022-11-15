import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  console.log('Hi Ali');
  }


}
