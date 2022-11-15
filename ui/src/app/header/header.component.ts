import { style } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }  

  // isActiveSidebar:boolean = false;
  // isDocHidden:boolean = true;
  DocHideToggle: boolean[] = [true, false]
  
  @Output() onToggleSidebar = new EventEmitter<boolean[]>();
  @Output() onClickHideDoc = new EventEmitter<boolean[]>();
  
  
  ngOnInit(): void {  }

  toggleSidebar(){    
    let isDocHidden = false;
    let isActiveSidebar= !this.DocHideToggle[1];
    this.DocHideToggle =[ isDocHidden,isActiveSidebar];
    this.onToggleSidebar.emit(this.DocHideToggle );
    console.log(this.DocHideToggle);
  }

  clickHideDoc(){
    let isDocHidden = true;
    let isActiveSidebar= false;
    this.DocHideToggle =[ isDocHidden,isActiveSidebar];
    this.onClickHideDoc.emit(this.DocHideToggle);
  }

}
