import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isActiveSidebar:boolean = false;
  @Input() isDocHidden:boolean = true;

  // sidebarSelected: boolean = false
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }  

  // public onClick(e:any){
  //   e.target.style.border= 'solid 2px #1976d2'
  //   e.target.style.color= '#1976d2'   

  // }

  navigate(link: string): void{
    console.log(this.router.url)
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
