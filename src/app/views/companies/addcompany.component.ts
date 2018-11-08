import { User} from '../models/user'
import { Component } from '@angular/core';

@Component({
  templateUrl: 'addcompany.component.html'
})
export class AddcompanyComponent {
  public user = new User();
  addCompany(form){
    console.log(form.value);
  }
  constructor() { }

}
