import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PupilsService {
  private http : HttpClient;
  private pupils = [];

  constructor(http : HttpClient){
    this.http = http;
  }

  fetchPupils(){
    this.pupils.length = 0;
    this.http.get("http://localhost:8080/pupils").subscribe(
      (response : any[])=>{
        console.log(response);
        for(let i = 0; i<response.length; i++){
          this.pupils.push(response[i]);
        }
      }
    );
  }

  createPupils(firstName, lastName, dateOfBirth){
    var pupil = {firstName : firstName, lastName : lastName, dateOfBirth : dateOfBirth};
    this.http.post("http://localhost:8080/pupils", pupil ,{responseType: 'text'}).subscribe(
      response=>{
        console.log(response);
        this.fetchPupils();
      }
    );
  }

  deletePupilByID(id){
    this.http.delete(`http://localhost:8080/pupils/${id}`, {responseType: "text"}).subscribe(
      response=>{
        console.log(response);
        this.fetchPupils();
      }
    );
  }
  updatePupil(pupil){
    this.http.put('http://localhost:8080/pupils', pupil).subscribe()
  }
  getPupilByID(id){
    return this.http.get(`http://localhost:8080/pupils/profile/${id}`)
  };

  getPupils(){
    return this.pupils;
  }



}
