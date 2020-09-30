import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private http : HttpClient;
  private lessons = [];

  constructor(http : HttpClient){
    this.http = http;
  }

  fetchLessons(){
    this.lessons.length = 0;
    this.http.get("http://localhost:8080/lessons").subscribe(
      (response : any[])=>{
        for(let i = 0; i<response.length; i++){
          this.lessons.push(response[i]);
        }
      }
    );
  }

  createLesson(name){
    var lesson = {name : name};
    this.http.post("http://localhost:8080/lessons", lesson ,{responseType: 'text'}).subscribe(
      response=>{
        console.log(response);
        this.fetchLessons();
      }
    );
  }

  deleteLessonByID(id){
    this.http.delete(`http://localhost:8080/lessons/${id}`, {responseType: "text"}).subscribe(
      response=>{
        console.log(response);
        this.fetchLessons();
      }
    );
  }
  updateLesson(lesson){
    this.http.put('http://localhost:8080/lessons', lesson).subscribe()
  }
  getLessonByID(id){
    return this.http.get(`http://localhost:8080/lessons/info/${id}`)
  }

  getLessons(){
    return this.lessons;
  }



}
