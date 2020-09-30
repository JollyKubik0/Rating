import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataValidatorService {

  constructor() { }

  validateDate(date){
    var regex=new RegExp("((0[1-9]|1[0-2])[/]([0-2]{1}[0-9]{1}|3[0-1]{1})[/][0-9]{4})");
    var isDateOk=regex.test(date);
    return isDateOk;
  }
}
