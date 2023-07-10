import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsRoutingModule } from './vendors-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { VendorsComponent } from './vendors.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { HeaderModule } from '../../header/header.module';

@NgModule({
  declarations: [VendorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VendorsRoutingModule,
    HeaderModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  exports: [VendorsComponent],
})
export class VendorsModule {}
