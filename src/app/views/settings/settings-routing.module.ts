import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenseComponent } from './license.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Companies'
    },
    children: [

      {
        path: 'license',
        component: LicenseComponent,
        data: {
          title: 'License'   
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
