import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcompanyComponent } from './addcompany.component';
import { ManagecompanyComponent } from './managecompany.component';
import { CompanybulkuploadComponent } from './companybulkupload.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Companies'
    },
    children: [

      {
        path: 'addcompany',
        component: AddcompanyComponent,
        data: {
          title: 'Addcompany'   
        }
      },
      {
        path: 'managecompany',
        component: ManagecompanyComponent,
        data: {
          title: 'Managecompany'   
        }
      },
      {
        path: 'companybulkupload',
        component: CompanybulkuploadComponent,
        data: {
          title: 'Companybulkupload'
        }
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
