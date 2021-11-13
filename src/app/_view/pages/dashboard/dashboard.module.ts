import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProjectTargetComponent } from '../project_target/project-target.component';

// const routes: Routes = [{
//   path:'',
//   component:ProjectTargetComponent
// }]
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      
    ])
  ],
})
export class DashboardModule {}
