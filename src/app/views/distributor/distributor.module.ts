import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdddistributorComponent } from './adddistributor.component';
import { ManagedistributorComponent } from './managedistributor.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Buttons Routing
import { DistributorRoutingModule } from './distributor-routing.component';

// Angular

@NgModule({
  imports: [
    CommonModule,
    DistributorRoutingModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    FormsModule
  ],
  declarations: [
    AdddistributorComponent,
    ManagedistributorComponent

  ]
})
export class DistributorModule { }