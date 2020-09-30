import { Component, OnInit } from '@angular/core';
import {PupilsService} from '../services/pupils.service';

@Component({
  selector: 'app-pupils-table',
  templateUrl: './pupils-table.component.html',
  styleUrls: ['./pupils-table.component.css'],
  providers: []
})
export class PupilsTableComponent implements OnInit {

  private pupilsService : PupilsService;
  pupils = [];
  constructor(pupilsSerivce : PupilsService) {
    this.pupilsService = pupilsSerivce;
  }
  onDelete(id){
    this.pupilsService.deletePupilByID(id);
  }

  ngOnInit(): void {
    this.pupilsService.fetchPupils();
    this.pupils = this.pupilsService.getPupils();
  }

}
