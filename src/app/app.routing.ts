import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'explore-projects',
    component: ExploreProjectsComponent
  },
  {
    path: 'admin-projects',
    component: AdminProjectsComponent
  }
  ,
  {
    path: 'admin-projects/create-project',
    component: CreateProjectComponent
  },
  {
    path: 'edit-project/:id',
    component: EditProjectComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
