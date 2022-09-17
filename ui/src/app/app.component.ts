import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if(element) element.scrollIntoView()
    })
  }
}
