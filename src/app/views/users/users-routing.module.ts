import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser.component';
import { ManageuserComponent } from './manageuser.component';
import { UserbulkuploadComponent } from './userbulkupload.component';
const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Companies'
        },
        children: [
            {
                path: 'adduser',
                component: AdduserComponent,
                data: {
                    title: 'Adduser'
                }
            },
            {
                path: 'manageuser',
                component: ManageuserComponent,
                data: {
                    title: 'Manageuser'
                }
            },
            {
                path: 'userbulkupload',
                component: UserbulkuploadComponent,
                data: {
                    title: 'Userbulkupload'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
