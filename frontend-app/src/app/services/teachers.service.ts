import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  private http : HttpClient;
  private teachers = [];

  constructor(http : HttpClient){
    this.http = http;
  }

  fetchTeachers(){
    this.teachers.length = 0;
    this.http.get("http://localhost:8080/teachers").subscribe(
      (response : any[])=>{
        console.log(response);
        for(let i = 0; i<response.length; i++){
          this.teachers.push(response[i]);
        }
      }
    );
  }

  createTeacher(firstName, lastName, dateOfBirth, lessons){
    var teacher = {firstName : firstName, lastName : lastName, dateOfBirth : dateOfBirth, lessons: lessons};
    this.http.post("http://localhost:8080/teachers", teacher ,{responseType: 'text'}).subscribe(
      response=>{
        console.log(response);
        this.fetchTeachers();
      }
    );
  }

  deleteTeacherByID(id){
    this.http.delete(`http://localhost:8080/teachers/${id}`, {responseType: "text"}).subscribe(
      response=>{
        console.log(response);
        this.fetchTeachers();
      }
    );
  }
  updateTeacher(teacher){
    this.http.put('http://localhost:8080/teachers', teacher).subscribe()
  }
  getTeacherByID(id){
    return this.http.get(`http://localhost:8080/teachers/profile/${id}`)
  };

  getTeachers(){
    return this.teachers;
  }



}
