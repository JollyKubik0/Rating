import moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { DataValidatorService } from '../services/data-validator.service';


@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.css']
})
export class CreateLessonComponent implements OnInit {

  nameError = false;

  private LessonService : LessonsService;

  constructor(LessonService : LessonsService) {
    this.LessonService = LessonService;
   }

  onSubmit(submittedForm){

    this.nameError = (submittedForm.value.name !== "") ? false : true;
    if(!this.nameError){
      this.LessonService.createLesson(submittedForm.value.name)
    }

  }


  ngOnInit(): void {
  }

}
