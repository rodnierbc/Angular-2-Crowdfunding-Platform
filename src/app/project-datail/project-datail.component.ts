import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-project-datail',
  templateUrl: './project-datail.component.html',
  styleUrls: ['./project-datail.component.css'],
  providers: [ProjectService]
})
export class ProjectDatailComponent implements OnInit {
  @Input() selectedProjectDetail;
  @Output() doneViewSender = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  doneView(){
    this.doneViewSender.emit();
  }

}
