import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors/vendors.component';
import { ProcurementComponent } from './procurement.component';

const routes: Routes = [
  { path: '', redirectTo: 'vendors', pathMatch: 'full' },
  {
    path: '',
    component: ProcurementComponent,
    children: [
      {
        path: 'vendors',
        data: { breadcrumb: 'Vendors' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/procurement/vendors/vendors.module'
          ).then((m) => m.VendorsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcurementRoutingModule {}
