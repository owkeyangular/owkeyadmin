import { Component } from '@angular/core';
declare var $: any;
@Component({
  templateUrl: 'userbulkupload.component.html'
})
export class UserbulkuploadComponent {

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
