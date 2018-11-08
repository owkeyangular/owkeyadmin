import { Component } from '@angular/core';
import {License} from '../models/license'
@Component({
  templateUrl: 'license.component.html'
})
export class LicenseComponent {
  public license = new License();

  licenseDistributor(form){
    console.log(form.value);
  }
  licenseCompanies(form){
    console.log(form.value);
  }
  homeUsers(home){
    console.log(home.value);
  }
  constructor() { }

}