import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentModuleRoutingModule } from './student-module-routing.module';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [
    
    NavBarComponent,
          HomepageComponent,
  ],
  imports: [
    CommonModule,
    StudentModuleRoutingModule
  ]
})
export class StudentModuleModule { }
