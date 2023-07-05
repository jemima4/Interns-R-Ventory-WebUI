import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCategoryComponent } from './products-category.component';
import { HeaderModule } from '../../header/header.module';
import { RouterModule } from '@angular/router';
import { ProductCategoryRoutingModule } from './products-category-routing.module';

@NgModule({
  declarations: [ProductsCategoryComponent],
  imports: [CommonModule, HeaderModule, ProductCategoryRoutingModule],
  exports: [ProductsCategoryComponent],
})
export class ProductsCategoryModule {}
