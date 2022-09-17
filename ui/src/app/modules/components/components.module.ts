import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
