import moment from 'moment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../services/teachers.service';
import { Subscription } from 'rxjs';
import { DataValidatorService } from '../services/data-validator.service';
import { LessonsService } from '../services/lessons.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-pupils-editor',
  templateUrl: './teachers-editor.component.html',
  styleUrls: ['./teachers-editor.component.css']
})
export class TeachersEditorComponent implements OnInit, OnDestroy {

  public teacher;
  private id;
  teacherService : TeachersService;
  lessonsService : LessonsService;
  updatedTeacher = {};
  dateStartsAt;
  teachersLessons = [];
  allLessons = [];


  firstNameError = false;
  lastNameError = false;
  dataError = false;

  private subscription : Subscription;
  private dataValidatorService : DataValidatorService;

  constructor(private router: Router, private route : ActivatedRoute, teacherService : TeachersService, lessonsService : LessonsService, dataValidatorService : DataValidatorService) {
    this.teacherService = teacherService;
    this.dataValidatorService = dataValidatorService;
    this.lessonsService = lessonsService;
   }

   onSubmit(submittedForm){
    var pipedDate = moment(submittedForm.value.dateOfBirth).format('MM/DD/YYYY');

    this.firstNameError = (submittedForm.value.firstName !== "") ? false : true;
    this.lastNameError = (submittedForm.value.lastName !== "") ? false : true;
    this.dataError = (this.dataValidatorService.validateDate(pipedDate)) ? false : true;
    if(!this.firstNameError && !this.lastNameError && !this.dataError){
      let lessonsToUpdate = [];
      for(let i = 0; i<this.allLessons.length; i++){
        this.allLessons.forEach(function(lesson){
          if(lesson.name === submittedForm.value.submittedLessons[i]){
            lessonsToUpdate.push(lesson);
          }
        })
      }
      this.updatedTeacher = {id: this.teacher.id, firstName: submittedForm.value.firstName,lastName: submittedForm.value.lastName, dateOfBirth: pipedDate, lessons: lessonsToUpdate}
      this.teacherService.updateTeacher(this.updatedTeacher);
    }
    this.router.navigate(['/teachers'])

  }


  ngOnInit(): void {
    this.lessonsService.fetchLessons();
    this.allLessons = this.lessonsService.getLessons();

    this.subscription = this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.teacherService.getTeacherByID(this.id).subscribe(
      response=>{
        console.log(response);
        this.teacher = response;
        this.dateStartsAt = new Date(this.teacher.dateOfBirth);
        this.teacher.lessons.forEach(lesson => {
          this.teachersLessons.push(lesson.name);
        });
      }
    )






  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

}
