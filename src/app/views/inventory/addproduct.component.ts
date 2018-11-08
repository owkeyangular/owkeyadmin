import { Component } from '@angular/core';
import {Inventory} from '../models/inventory'
declare var $: any;
@Component({
  templateUrl: 'addproduct.component.html'
})
export class AddproductComponent {
  public inventory = new Inventory();
  addProduct(form){
    console.log(form.value);
  }
  constructor() { }
  ngOnInit() {
   
    $('.dropify').dropify({
      messages: {
        'default': 'Drag and drop a file here or click',
        'replace': 'Drag and drop or click to replace',
        'remove':  'Remove',
        'error':   'Ooops, something wrong happended.'
    }
    }); 
  }

}