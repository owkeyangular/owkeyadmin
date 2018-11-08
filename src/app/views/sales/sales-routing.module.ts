import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddorderComponent } from './addorder.component';
import { OrderhistoryComponent } from './orderhistory.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Companies'
    },
    children: [
      {
        path: 'addorder',
        component: AddorderComponent,
        data: {
          title: 'Addorder'   
        }
      },
      {
        path: 'orderhistory',
        component: OrderhistoryComponent,
        data: {
          title: 'Orderhistory'   
        }
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule {}
