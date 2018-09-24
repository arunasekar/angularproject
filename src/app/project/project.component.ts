import { Component, OnInit } from '@angular/core';
import {Pro} from'../pro';
import{TEST} from'../mock-test';
import{RegularService}from'../regular.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

selectedPro:Pro;
test:Pro[];
  constructor(private regularservice:RegularService) { }

  ngOnInit() {
    this.getTest();
  }


onSelect(proj: Pro): void {
  this.selectedPro =proj;
}
getTest():void{
  this.regularservice.getTest()
  .subscribe(test=>this.test=test);
}
}