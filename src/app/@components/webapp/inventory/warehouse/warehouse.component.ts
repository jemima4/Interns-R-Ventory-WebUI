import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit, AfterViewInit{
  displayedColumns: string[] = [
    'categoriesName',
    'createdBy',
    'createdDate',
    'lastUpdatedBy',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<any[]> | null = null;
  selection = new SelectionModel<any>(true, []);
  dummyData: any[] = [
    {
      categoriesName: 'Ikeja(IKJ)',
      createdBy: 'faruq@mail.com',
      createDate: '12 Aug 2022 - 12:25am',
      lastUpdatedBy: 'Faruq Olaseni',
      status: '1',
      actions: '',
    },
    {
      categoriesName: 'Ikeja(IKJ)',
      createdBy: 'faruq@mail.com',
      createDate: '12 Aug 2022 - 12:25am',
      lastUpdatedBy: 'Faruq Olaseni',
      status: '2',
      actions: '',
    },
  ];
  totalRecords = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) Sort: MatSort | any;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dummyData);
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

  ngAfterViewInit(): void{
  this.dataSource!.sort = this.Sort;
  this.dataSource!.paginator = this.paginator;
  }
}
