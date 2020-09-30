import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { PupilsService } from '../services/pupils.service';
import { TeachersService } from '../services/teachers.service';
import { RatingsService } from '../services/ratings.service';
import moment from 'moment';



@Component({
  selector: 'app-create-rating',
  templateUrl: './create-rating.component.html',
  styleUrls: ['./create-rating.component.css']
})
export class CreateRatingComponent implements OnInit {

  public teachers = [];
  public lessons = [];
  public pupils = [];
  public rates = Array.from({length: 12}, (_, i) => i + 1)


  constructor(private teachersService : TeachersService, private lessonsSerivce : LessonsService, private pupilsService : PupilsService, private ratingsService: RatingsService) { }

  ngOnInit(): void {
    this.teachers = this.teachersService.getTeachers();
    this.lessons = this.lessonsSerivce.getLessons();
    this.pupils = this.pupilsService.getPupils();
  }

  onSubmit(submittedForm){
    this.ratingsService.createRating(moment().format('MMMM Do YYYY, h:mm:ss a'), submittedForm.value.teacher, submittedForm.value.lesson, submittedForm.value.pupil, submittedForm.value.rate)
  }

}
