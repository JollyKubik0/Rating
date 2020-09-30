import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons-editor',
  templateUrl: './lessons-editor.component.html',
  styleUrls: ['./lessons-editor.component.css']
})
export class LessonsEditorComponent implements OnInit {

  public lesson;
  private id;
  lessonsService : LessonsService;
  updatedLesson = {};

  nameError = false;

  private subscription : Subscription;

  constructor(private router: Router, private route : ActivatedRoute, lessonsService : LessonsService) {
    this.lessonsService = lessonsService;
   }

   onSubmit(submittedForm){
    this.nameError = (submittedForm.value.lastName !== "") ? false : true;
    this.updatedLesson = {id: this.lesson.id, name: submittedForm.value.name}
    if(!this.nameError){
      this.lessonsService.updateLesson(this.updatedLesson)
      console.log("ok")
    }
    this.router.navigate(['/lessons'])

  }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.lessonsService.getLessonByID(this.id).subscribe(
      response=>{
        this.lesson = response;
        console.log(this.lesson.name);
      }
    )


  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

}
