import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../services/teachers.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css'],
  providers: []
})
export class TeachersTableComponent implements OnInit {

  teachers = [];
  private teacherService : TeachersService;
  constructor(teacherService : TeachersService) {
    this.teacherService = teacherService;
  }
  onDelete(id){
    this.teacherService.deleteTeacherByID(id);
  }

  ngOnInit(): void {
    this.teacherService.fetchTeachers();
    this.teachers = this.teacherService.getTeachers();
  }
  ngOnDestroy(): void{
    this.teacherService.fetchTeachers();
    this.teachers = this.teacherService.getTeachers();
  }

}
