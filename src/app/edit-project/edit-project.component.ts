import { Component, OnInit, Input} from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  projectId: string;
  projectToEdit: Project;
  projectToEditObservable;

  constructor(private projectService: ProjectService , private route: ActivatedRoute, private location: Location) { }

  beginUpdatingProject(projectToUpdate){
   this.projectService.updateProject(projectToUpdate);
  }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.projectId = urlParameters['id'];
   });
   this.projectToEditObservable = this.projectService.getProjectById(this.projectId)
   this.projectToEditObservable.subscribe(dataLastEmittedFromObserver => {
			this.projectToEdit  = dataLastEmittedFromObserver;
		});

  }

}
