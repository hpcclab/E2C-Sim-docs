import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isActiveSidebar: boolean = false; 
  isDocHidden: boolean = false;   
  DocHideToggle: boolean[] = [];
  
  constructor(private route: ActivatedRoute){}

  ngOnInit(){     
  }
  
  public sidebarClicked( DocHideToggle: boolean[]){
    console.log('sidebarclicked');        
    this.isDocHidden =DocHideToggle[0] ; 
    this.isActiveSidebar = DocHideToggle[1];
  }

  public hideDocClicked( DocHideToggle: boolean[]){
    console.log('HideDocclicked');        
    this.isDocHidden =DocHideToggle[0] ; 
    this.isActiveSidebar = DocHideToggle[1];
  }




}
