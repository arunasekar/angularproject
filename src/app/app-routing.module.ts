import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent }      from './project/project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
  
  { path: 'project', component: ProjectComponent },
  { path: 'details/:id', component: ProjectDetailsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
