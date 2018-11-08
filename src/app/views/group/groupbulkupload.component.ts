import { Component } from '@angular/core';
import {Group} from '../models/group'
declare var $: any;
@Component({
  templateUrl: 'groupbulkupload.component.html'
})
export class GroupbulkuploadComponent {
  public group = new Group();
  bulkupload(form){
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