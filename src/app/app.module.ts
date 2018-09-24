import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from'@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
  FormsModule,
  AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
