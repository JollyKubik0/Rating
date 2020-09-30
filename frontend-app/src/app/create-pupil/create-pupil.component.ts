import moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { PupilsService } from '../services/pupils.service';
import { DataValidatorService } from '../services/data-validator.service';


@Component({
  selector: 'app-create-pupil',
  templateUrl: './create-pupil.component.html',
  styleUrls: ['./create-pupil.component.css']
})
export class CreatePupilComponent implements OnInit {

  firstNameError = false;
  lastNameError = false;
  dataError = false;

  private pupilService : PupilsService;
  private dataValidatorService : DataValidatorService;

  constructor(pupilService : PupilsService, dataValidatorService : DataValidatorService) {
    this.dataValidatorService = dataValidatorService;
    this.pupilService = pupilService;
   }

  onSubmit(submittedForm){

    var pipedDate = moment(submittedForm.value.dateOfBirth).format('MM/DD/YYYY');

    this.firstNameError = (submittedForm.value.firstName !== "") ? false : true;
    this.lastNameError = (submittedForm.value.lastName !== "") ? false : true;
    this.dataError = (this.dataValidatorService.validateDate(pipedDate)) ? false : true;
    if(!this.firstNameError && !this.lastNameError && !this.dataError){
      this.pupilService.createPupils(submittedForm.value.firstName, submittedForm.value.lastName, pipedDate)
    }

  }


  ngOnInit(): void {
  }

}
