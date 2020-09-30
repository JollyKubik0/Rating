import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';

@Component({
  selector: 'app-lessons-table',
  templateUrl: './lessons-table.component.html',
  styleUrls: ['./lessons-table.component.css'],
  providers: []
})
export class LessonsTableComponent implements OnInit {

  private lessonsService : LessonsService;
  lessons = [];
  constructor(lessonsService : LessonsService) {
    this.lessonsService = lessonsService;
  }
  onDelete(id){
    this.lessonsService.deleteLessonByID(id);
  }

  ngOnInit(): void {
    this.lessonsService.fetchLessons();
    this.lessons = this.lessonsService.getLessons();
  }

}
