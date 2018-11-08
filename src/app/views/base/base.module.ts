// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { AdddistributorComponent } from './adddistributor.component';
// import { ManagedistributorComponent } from './managedistributor.component';
// import { AddcompanyComponent } from './addcompany.component';
// import { ManagecompanyComponent } from './managecompany.component';
// import { CompanybulkuploadComponent } from './companybulkupload.component';
// import { AdduserComponent } from './adduser.component';
// import { ManageuserComponent } from './manageuser.component';
// import { UserbulkuploadComponent } from './userbulkupload.component';
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





// Forms Component
import { FormsComponent } from './forms.component';

import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TooltipsComponent } from './tooltips.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    // AdddistributorComponent,
    // ManagedistributorComponent,
    // AddcompanyComponent,
    // ManagecompanyComponent,
    // CompanybulkuploadComponent,
    // AdduserComponent,
    // ManageuserComponent,
    // UserbulkuploadComponent,
    // AccesssendComponent,
    // AccessreceiveComponent,
    // CreatgroupComponent,
    // GroupbulkuploadComponent,
    // AddproductComponent,
    // ManageproductComponent,
    // AdddevicesComponent,
    // ManagedevicesComponent,
    // AddorderComponent,
    // OrderhistoryComponent,
    // LicenseComponent,
    FormsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent
  ]
})
export class BaseModule { }
