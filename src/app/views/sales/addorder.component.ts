import { Component } from '@angular/core';
import {AddOrder} from '../models/addorder'
@Component({
  templateUrl: 'addorder.component.html'
})
export class AddorderComponent {

  public addorder = new AddOrder();
  sales(form){
    console.log(form.value);
  }

  constructor() { }

}
