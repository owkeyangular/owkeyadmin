// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddorderComponent } from './addorder.component';
import { OrderhistoryComponent } from './orderhistory.component';


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
// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';

//Models Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Components Routing
import { SalesRoutingModule } from './sales-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AddorderComponent,
    OrderhistoryComponent
  ]
})
export class SalesModule { }
