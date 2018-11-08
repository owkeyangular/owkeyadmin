import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddistributorComponent } from './adddistributor.component';
import { ManagedistributorComponent } from './managedistributor.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Distributor'
    },
    children: [
      {
        path: 'adddistributor',
        component: AdddistributorComponent,
        data: {
          title: 'Adddistributor'
        }
      },
      {
        path: 'managedistributor',
        component: ManagedistributorComponent,
        data: {
          title: 'Managedistributor'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule {}
