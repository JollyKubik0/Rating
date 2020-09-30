import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { PupilsTableComponent } from './pupils-table/pupils-table.component';
import { CreatePupilComponent } from './create-pupil/create-pupil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PupilsEditorComponent } from './pupils-editor/pupils-editor.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { TeachersTableComponent } from './teachers-table/teachers-table.component';
import { TeachersEditorComponent } from './teachers-editor/teachers-editor.component';
import { LessonsTableComponent } from './lessons-table/lessons-table.component';
import { LessonsEditorComponent } from './lessons-editor/lessons-editor.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';
import { RatingsTableComponent } from './ratings-table/ratings-table.component';
import { CreateRatingComponent } from './create-rating/create-rating.component';
import { RatingsService } from './services/ratings.service';


const routes = [
  {path: 'pupils', component: PupilsTableComponent},
  {path: 'pupils/profile/:id', component: PupilsEditorComponent},
  {path:'teachers', component: TeachersTableComponent},
  {path: 'teachers/profile/:id', component: TeachersEditorComponent},
  {path:'lessons', component: LessonsTableComponent},
  {path: 'lessons/info/:id', component: LessonsEditorComponent},
  {path: 'ratings', component: RatingsTableComponent},
  {path: '**', redirectTo: '/pupils', pathMatch: 'full'},


];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    PupilsTableComponent,
    CreatePupilComponent,
    PupilsEditorComponent,
    CreateTeacherComponent,
    TeachersTableComponent,
    TeachersEditorComponent,
    LessonsTableComponent,
    LessonsEditorComponent,
    CreateLessonComponent,
    RatingsTableComponent,
    CreateRatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [RatingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
