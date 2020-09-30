import moment from 'moment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PupilsService } from '../services/pupils.service';
import { Subscription } from 'rxjs';
import { DataValidatorService } from '../services/data-validator.service';



@Component({
  selector: 'app-pupils-editor',
  templateUrl: './pupils-editor.component.html',
  styleUrls: ['./pupils-editor.component.css']
})
export class PupilsEditorComponent implements OnInit, OnDestroy {

  public pupil;
  private id;
  pupilService : PupilsService;
  updatedPupil = {};
  dateStartsAt;

  firstNameError = false;
  lastNameError = false;
  dataError = false;

  private subscription : Subscription;
  private dataValidatorService : DataValidatorService;

  constructor(private router: Router, private route : ActivatedRoute, pupilService : PupilsService, dataValidatorService : DataValidatorService) {
    this.pupilService = pupilService;
    this.dataValidatorService = dataValidatorService;
   }

   onSubmit(submittedForm){
    var pipedDate = moment(submittedForm.value.dateOfBirth).format('MM/DD/YYYY');

    this.firstNameError = (submittedForm.value.firstName !== "") ? false : true;
    this.lastNameError = (submittedForm.value.lastName !== "") ? false : true;
    this.dataError = (this.dataValidatorService.validateDate(pipedDate)) ? false : true;
    this.updatedPupil = {id: this.pupil.id, firstName: submittedForm.value.firstName,lastName: submittedForm.value.lastName, dateOfBirth: pipedDate}
    if(!this.firstNameError && !this.lastNameError && !this.dataError){
      this.pupilService.updatePupil(this.updatedPupil)
      console.log("ok")
    }
    this.router.navigate(['/pupils'])

  }


  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.pupilService.getPupilByID(this.id).subscribe(
      response=>{
        this.pupil = response;
        this.dateStartsAt = new Date(this.pupil.dateOfBirth);
        console.log(this.dateStartsAt);
      }
    )


  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe;
  }

}
