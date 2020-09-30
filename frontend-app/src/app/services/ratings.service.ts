import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LessonsService } from './lessons.service';
import { TeachersService } from './teachers.service';
import { PupilsService } from './pupils.service';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  private ratings = [];
  private teachers = [];
  private lessons = [];
  private pupils = [];

  constructor(private http : HttpClient, private pupilService: PupilsService, private lessonsService: LessonsService, private teachersService : TeachersService){
    this.teachersService.fetchTeachers();
    this.lessonsService.fetchLessons();
    this.pupilService.fetchPupils();


    this.teachers = this.teachersService.getTeachers();
    this.lessons = this.lessonsService.getLessons();
    this.pupils = this.pupilService.getPupils();
  }

  fetchRatings(){
    this.ratings.length = 0;
    this.http.get("http://localhost:8080/ratings").subscribe(
      (response : any[]) =>{
        for(let i = 0; i<response.length; i++){
          let teacher = this.teachers.filter(teacher => {return teacher.id == response[i].teacherId})
          let lesson = this.lessons.filter(lesson=>{return lesson.id == response[i].lessonId})
          let pupil = this.pupils.filter(pupil=>{return pupil.id == response[i].pupilId})

          let rating = {id : response[i].id, dateOfCreation : response[i].dateOfCreation, teacher: teacher, lesson: lesson, pupil : pupil, rating: response[i].rating};
          this.ratings.push(rating);
          console.log(rating);
        }
      }
    )
  }
  deleteRating(id){
    this.http.delete(`http://localhost:8080/rating/${id}`, {responseType: "text"}).subscribe(
      response=>{
        console.log(response);
        this.fetchRatings();
      }
    );
  }

  createRating(dateOfCreation, teacherId, lessonId, pupilId, rating){
    let rate = {dateOfCreation : dateOfCreation, teacherId : teacherId, lessonId: lessonId, pupilId: pupilId, rating: rating}
    console.log(rate);
    this.http.post("http://localhost:8080/ratings" , rate, {responseType: 'text'}).subscribe(
      response=>{
        console.log(response);
        this.fetchRatings();
      }
    )
  }

  getRatings(){
    return this.ratings;
  }

}

