// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AddproductComponent } from './addproduct.component';
import { ManageproductComponent } from './manageproduct.component';


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
// Components Routing
import { inventoryRoutingModule } from './inventory-routing.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        inventoryRoutingModule,
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
        AddproductComponent,
        ManageproductComponent
    ]
})
export class InventoryModule { }
