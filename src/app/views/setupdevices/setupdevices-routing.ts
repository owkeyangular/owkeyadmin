import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddevicesComponent } from './adddevices.component';
import { ManagedevicesComponent } from './managedevices.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Companies'
    },
    children: [
      {
        path: 'adddevices',
        component: AdddevicesComponent,
        data: {
          title: 'Adddevices'   
        }
      },
      {
        path: 'managedevices',
        component: ManagedevicesComponent,
        data: {
          title: 'Managedevices'   
        }
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupDevicesRoutingModule {}
