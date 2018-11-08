import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatgroupComponent } from './creatgroup.component';
import { GroupbulkuploadComponent } from './groupbulkupload.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Group'
        },
        children: [
            {
                path: 'creatgroup',
                component: CreatgroupComponent,
                data: {
                    title: 'Creatgroup'
                }
            },
            {
                path: 'groupbulkupload',
                component: GroupbulkuploadComponent,
                data: {
                    title: 'Groupbulkupload'
                }
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule { }
