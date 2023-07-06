import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarehouseComponent } from './warehouse.component';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';

export const routes: Routes = [{ path: '', component: WarehouseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarehouseRoutingModule {}
