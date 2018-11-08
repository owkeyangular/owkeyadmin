// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
// import { AddcompanyComponent } from './addcompany.component';
// import { ManagecompanyComponent } from './managecompany.component';
// import { CompanybulkuploadComponent } from './companybulkupload.component';

import { AccesssendComponent } from './accesssend.component';
import { AccessreceiveComponent } from './accessreceive.component';
// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

//Date picker & Time picker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// Components Routing
import { AccessRoutingModule } from './access-routing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccessRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  declarations: [
    AccesssendComponent,
    AccessreceiveComponent
    // AddcompanyComponent,
    // ManagecompanyComponent,
    // CompanybulkuploadComponent,
  ]
})
export class AccessModule { }
