import { Component } from '@angular/core';
import {SetupDevices} from '../models/setupdevices'
@Component({
  templateUrl: 'adddevices.component.html'
})
export class AdddevicesComponent {

  public addDevice = new SetupDevices();

  addDevices(form){
    console.log(form.value);
  }
  addDevicedistributor(frm){
    console.log(frm.value);
  }

  constructor() { }

}