import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreadcrumbModule } from '../breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule, BreadcrumbModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
