import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddeventsComponent } from './addevents.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'inventory'
    },
    children: [

      {
        path: 'addevents',
        component: AddeventsComponent,
        data: {
          title: 'Addproduct'   
        }
      },
    //   {
    //     path: 'manageproduct',
    //     component: ManageproductComponent,
    //     data: {
    //       title: 'Manageproduct'   
    //     }
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
