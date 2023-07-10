import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryComponent,
    children: [
      {
        path: 'product-category',
        data: { breadcrumb: 'Product Category' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/inventory/products-category/products-category.module'
          ).then((m) => m.ProductsCategoryModule),
      },
      {
        path: 'warehouse',
        data: { breadcrumb: 'Warehouse' },
        loadChildren: () =>
          import(
            'src/app/@components/webapp/inventory/warehouse/warehouse.module'
          ).then((m) => m.WarehouseModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
