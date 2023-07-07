import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewCategoryComponent } from './add-new-category/add-new-category.component';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface Category {
  check: true;
  category: string;
  createdBy: string;
  date: Date;
  lastToUpdate: string;
  updated: Date;
  status: boolean;
  action: boolean;
}

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss'],
})
export class ProductsCategoryComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  constructor(public dialog: MatDialog) {}

  // Table data
  displayedColumns: string[] = [
    'select',
    'Categorie',
    'Created By',
    'Created Date',
    'Last Updated By',
    'status',
    'Action',
  ];
  datasource: MatTableDataSource<any[]> | null = null;

  dummyData: any[] = [
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
    {
      check: true,
      category: 'Casual Shoes',
      createdBy: 'Kola',
      date: new Date(),
      lastToUpdate: 'Fatima',
      updated: new Date(),
      status: true,
      action: false,
    },
  ];

  ngOnInit(): void {
    this.datasource = new MatTableDataSource(this.dummyData);
  }

  openForm() {
    const popUp = this.dialog.open(AddNewCategoryComponent, {
      width: '26.4375rem',
      height: '19.8125rem',
      backdropClass: 'zns-dialog-backdrop',
      autoFocus: true,
      panelClass: 'dialog-test',

      data: {
        name: 'Omotosho Kolawole',
        type: 'Angular',
      },
    });

    this.subscription.add(
      popUp.afterClosed().subscribe((data) => {
        if (data) {
          console.log(data.categoryName);
        } else {
          console.log('No dat passed');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
