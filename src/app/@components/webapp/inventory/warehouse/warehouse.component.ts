import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface dummyData {
  categoriesName: string;
  createdBy: string;
  createDate: Date;
  lastUpdatedBy: string;
  status: boolean;
  actions: boolean;
}

const dummyDatas: dummyData[] = [
  {
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    createDate: new Date(),
    lastUpdatedBy: 'Faruq Olaseni',
    status: true,
    actions: true,
  },
  {
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    createDate: new Date(),
    lastUpdatedBy: 'Faruq Olaseni',
    status: true,
    actions: true,
  },
];

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'categoriesName',
    'createdBy',
    'createDate',
    'lastUpdatedBy',
    'status',
    'actions',
  ];
  // dataSource: MatTableDataSource<any[]> | null = null;
  // dataSource: selection = new SelectionModel<any>(true, []);
  dataSource: dummyData[] = [];

  // totalRecords = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) Sort: MatSort | any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // this.dataSource = new MatTableDataSource(this.dummyData);
    this.dataSource = dummyDatas;
  }
  openDialogNew() {
    this.dialog.open(NewWarehouseComponent, {
      data: {},
      disableClose: true,
      autoFocus: true,
      panelClass: 'zns-dialog',
      backdropClass: 'zns-dialog-backdrop',
    });
  }

  ngAfterViewInit(): void {
    // this.dataSource!.sort = this.Sort;
    // this.dataSource!.paginator = this.paginator;
  }
}
