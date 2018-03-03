import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';



import { AppComponent } from './app.component';
import { DashboardWelcomeComponent } from './dashboard-welcome/dashboard-welcome.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { AdminProjectsComponent } from './admin-projects/admin-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectDatailComponent } from './project-datail/project-datail.component';
import { FilterText } from './filter-text.pipe';

import { AuthService } from './providers/auth.service';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardWelcomeComponent,
    ExploreProjectsComponent,
    AdminProjectsComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ProjectDatailComponent,
    FilterText,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
