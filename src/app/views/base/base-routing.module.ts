import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CardsComponent } from './cards.component';
// import { AddcompanyComponent } from './addcompany.component';
// import { ManagecompanyComponent } from './managecompany.component';
// import { CompanybulkuploadComponent } from './companybulkupload.component';
// import { AdduserComponent } from './adduser.component';
// import { ManageuserComponent } from './manageuser.component';
// import { UserbulkuploadComponent } from './userbulkupload.component';

// import { AdddistributorComponent } from './adddistributor.component';
// import { ManagedistributorComponent } from './managedistributor.component';
// import { AccesssendComponent } from './accesssend.component';
// import { AccessreceiveComponent } from './accessreceive.component';
// import { CreatgroupComponent } from './creatgroup.component';
// import { GroupbulkuploadComponent } from './groupbulkupload.component';
// import { AddproductComponent } from './addproduct.component';
// import { ManageproductComponent } from './manageproduct.component';
// import { AdddevicesComponent } from './adddevices.component';
// import { ManagedevicesComponent } from './managedevices.component';
// import { AddorderComponent } from './addorder.component';
// import { OrderhistoryComponent } from './orderhistory.component';
// import { LicenseComponent } from './license.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
// import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import {PopoversComponent} from './popovers.component';
import {ProgressComponent} from './progress.component';
import {TooltipsComponent} from './tooltips.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      // {
      //   path: 'adddistributor',
      //   component: AdddistributorComponent,
      //   data: {
      //     title: 'Adddistributor'
      //   }
      // },
      // {
      //   path: 'managedistributor',
      //   component: ManagedistributorComponent,
      //   data: {
      //     title: 'managedistributor'
      //   }
      // },
      // {
      //   path: 'addcompany', 
      //   component: AddcompanyComponent,
      //   data: {
      //     title: 'Addcompany'   
      //   }
      // },
      // {
      //   path: 'managecompany',
      //   component: ManagecompanyComponent,
      //   data: {
      //     title: 'Managecompany'   
      //   }
      // },
      // {
      //   path: 'companybulkupload',
      //   component: CompanybulkuploadComponent,
      //   data: {
      //     title: 'Companybulkupload'
      //   }
      // },
      // {
      //   path: 'adduser',
      //   component: AdduserComponent,
      //   data: {
      //     title: 'Adduser' 
      //   }
      // },
      // {
      //   path: 'manageuser',
      //   component: ManageuserComponent,
      //   data: {
      //     title: 'Manageuser' 
      //   }
      // },
      // {
      //   path: 'userbulkupload',
      //   component: UserbulkuploadComponent,
      //   data: {
      //     title: 'Userbulkupload' 
      //   }
      // },
      // {
      //   path: 'accesssend',
      //   component: AccesssendComponent,
      //   data: {
      //     title: 'Accesssend' 
      //   }
      // },
      // {
      //   path: 'accessreceive',
      //   component: AccessreceiveComponent,
      //   data: {
      //     title: 'Accessreceive' 
      //   }
      // },
      // {
      //   path: 'creatgroup',
      //   component: CreatgroupComponent,
      //   data: {
      //     title: 'Creatgroup' 
      //   }
      // },
      // {
      //   path: 'groupbulkupload',
      //   component: GroupbulkuploadComponent,
      //   data: {
      //     title: 'Groupbulkupload' 
      //   }
      // },
      // {
      //   path: 'addproduct',
      //   component: AddproductComponent,
      //   data: {
      //     title: 'Addproduct' 
      //   }
      // },
      // {
      //   path: 'manageproduct',
      //   component: ManageproductComponent,
      //   data: {
      //     title: 'manageproduct' 
      //   }
      // },
      // {
      //   path: 'adddevices',
      //   component: AdddevicesComponent,
      //   data: {
      //     title: 'Adddevice' 
      //   }
      // },
      // {
      //   path: 'managedevices',
      //   component: ManagedevicesComponent,
      //   data: {
      //     title: 'Managedevices' 
      //   }
      // },
      // {
      //   path: 'addorder',
      //   component: AddorderComponent,
      //   data: {
      //     title: 'Addorder' 
      //   }
      // },
      // {
      //   path: 'orderhistory',
      //   component: OrderhistoryComponent,
      //   data: {
      //     title: 'Orderhistory' 
      //   }
      // },
      // {
      //   path: 'license',
      //   component: LicenseComponent,
      //   data: {
      //     title: 'License' 
      //   }
      // },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      // {
      //   path: 'collapses',
      //   component: CollapsesComponent,
      //   data: {
      //     title: 'Collapses'
      //   }
      // },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
