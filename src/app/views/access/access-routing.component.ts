import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddcompanyComponent } from './addcompany.component';
// import { ManagecompanyComponent } from './managecompany.component';
// import { CompanybulkuploadComponent } from './companybulkupload.component';
import { AccesssendComponent } from './accesssend.component';
import { AccessreceiveComponent } from './accessreceive.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Companies'
    },
    children: [

      {
        path: 'accesssend',
        component: AccesssendComponent,
        data: {
          title: 'Accesssend'   
        }
      },
      {
        path: 'accessreceive',
        component: AccessreceiveComponent,
        data: {
          title: 'Accessreceive'   
        }
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule {}
