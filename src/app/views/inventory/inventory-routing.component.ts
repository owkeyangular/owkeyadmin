import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct.component';
import { ManageproductComponent } from './manageproduct.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'inventory'
    },
    children: [

      {
        path: 'addproduct',
        component: AddproductComponent,
        data: {
          title: 'Addproduct'   
        }
      },
      {
        path: 'manageproduct',
        component: ManageproductComponent,
        data: {
          title: 'Manageproduct'   
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class inventoryRoutingModule {}
