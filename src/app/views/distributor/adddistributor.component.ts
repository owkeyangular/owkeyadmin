import { Component, OnInit } from '@angular/core';
// import{FormsModule} from'@angular/forms';
import { User} from '../models/user'
@Component({
  templateUrl: 'adddistributor.component.html'
})
export class AdddistributorComponent implements OnInit {
  // userlist: User[] = [];
  public user = new User();
  addUser(form){
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() { }

}