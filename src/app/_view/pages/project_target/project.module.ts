import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTargetComponent } from './project-target.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table'

const routes: Routes = [{
  path:'',
  component:ProjectTargetComponent
}]

@NgModule({
  declarations: [
    ProjectTargetComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule
  ]
})
export class ProjectModule { }
