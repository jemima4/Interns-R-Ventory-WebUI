import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcurementComponent } from './procurement.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ProcurementRoutingModule } from './procurement-routing.module';

@NgModule({
  declarations: [ProcurementComponent],
  imports: [CommonModule, HeaderModule, ProcurementRoutingModule],
  exports: [RouterModule],
})
export class ProcurementModule {}
