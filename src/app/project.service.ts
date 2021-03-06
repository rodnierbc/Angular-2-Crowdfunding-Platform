import { Injectable } from '@angular/core';
import { Project } from './models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }
  addProject(newProject: Project) {
    this.projects.push(newProject);
  }
  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }
  updateProject(localUpdatedProject){
    var projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({title: localUpdatedProject.title,
                                category: localUpdatedProject.category,
                                description: localUpdatedProject.description,
                                money_required: localUpdatedProject.money_required,
                                get_rewards: localUpdatedProject.get_rewards});
  }
  deleteProyect(localProjectToDelete){
    var proyectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    proyectEntryInFirebase.remove();
  }

}
