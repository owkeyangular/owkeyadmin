import { Component, OnInit } from '@angular/core';
import {Access} from '../models/access'
@Component({
  templateUrl: 'accesssend.component.html'
})
export class AccesssendComponent implements OnInit {

  public access = new Access();

  accessUser(form){
    console.log(form.value);
  }

  constructor() { }
  
  ngOnInit() { }

}
