import { Component, OnInit, Input } from '@angular/core';
import {Pro} from '../pro';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() proj: Pro
  constructor() { }

  ngOnInit() {
  }
  

}
