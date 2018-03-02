import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css'],
  providers: [ProjectService]
})
export class ExploreProjectsComponent implements OnInit {
  projects: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  selectedProjectDetail: Project = null;
  text: string;

  constructor(private router: Router, private projectService: ProjectService){}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  goToEditPage(project){
    this.router.navigate(['edit-project', project.$key]);
  }

  beginDeletingProject(project){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.projectService.deleteProyect(project);
    }
  }
  showProjectDetail(project){
    this.selectedProjectDetail = project;
  }
  doneView(){
    this.selectedProjectDetail = null;
  }
  onChange(text){
    this.text = text;
  }

}
