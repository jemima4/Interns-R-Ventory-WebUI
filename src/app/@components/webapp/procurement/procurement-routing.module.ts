import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';

const routes: Routes = [
  { path: '', redirectTo: 'vendors', pathMatch: 'full' },
  { path: 'vendors', component: VendorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurementRoutingModule {}
