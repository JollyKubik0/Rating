import moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../services/teachers.service';
import { DataValidatorService } from '../services/data-validator.service';
import { LessonsService } from '../services/lessons.service';


@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {

  firstNameError = false;
  lastNameError = false;
  dataError = false;

  availableLessons = [];

  lessonToInsert;

  private lessonsService : LessonsService;
  private teacherService : TeachersService;
  private dataValidatorService : DataValidatorService;

  constructor(teachersService : TeachersService, dataValidatorService : DataValidatorService, lessonsService: LessonsService) {
    this.lessonsService = lessonsService;
    this.teacherService = teachersService;
    this.dataValidatorService = dataValidatorService;
   }

  onSubmit(submittedForm){

    var pipedDate = moment(submittedForm.value.dateOfBirth).format('MM/DD/YYYY');

    this.firstNameError = (submittedForm.value.firstName !== "") ? false : true;
    this.lastNameError = (submittedForm.value.lastName !== "") ? false : true;
    this.dataError = (this.dataValidatorService.validateDate(pipedDate)) ? false : true;
    if(!this.firstNameError && !this.lastNameError && !this.dataError){
      let lessonsToInsert = [];
      for(let i = 0; i<this.availableLessons.length; i++){
        this.availableLessons.forEach(function(lesson){
          if(lesson.name === submittedForm.value.lessons[i]){
            lessonsToInsert.push(lesson);
          }
        })
      }
      this.teacherService.createTeacher(submittedForm.value.firstName, submittedForm.value.lastName, pipedDate, lessonsToInsert)
    }

  }


  ngOnInit(): void {
    this.lessonsService.fetchLessons();
    this.availableLessons = this.lessonsService.getLessons();
  }

}
