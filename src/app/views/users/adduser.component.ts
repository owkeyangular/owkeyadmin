import { Component } from '@angular/core';
import {AddUser} from '../models/adduser'
@Component({
  templateUrl: 'adduser.component.html'
})
export class AdduserComponent {
  public adduser = new AddUser();
  constructor() { }

  Usersadd(form){
    console.log(form.value);
  }
  // resetform(frm){
   
  //     this.Usersadd=;
   
  // }

}
