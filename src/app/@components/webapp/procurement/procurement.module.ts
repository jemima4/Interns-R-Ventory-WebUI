import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcurementComponent } from './procurement.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [ProcurementComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild([{ path: '', component: ProcurementComponent }]),
  ],
  exports: [RouterModule],
})
export class ProcurementModule {}
