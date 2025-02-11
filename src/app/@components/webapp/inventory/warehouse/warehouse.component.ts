import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewWarehouseComponent } from './new-warehouse/new-warehouse.component';
// import { MatTableDataSource } from '@angular/material/table';
// import { SelectionModel } from '@angular/cdk/collections';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';

export interface dummyData {
  check: boolean;
  categoriesName: string;
  createdBy: string;
  date: Date;
  updatedBy: string;
  updateDate: Date;
  status: string;
 
}

const dummyDatas: dummyData[] = [
  {
    check: false,
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    date: new Date(),
    updatedBy: 'Faruq Olaseni',
    updateDate: new Date(),
    status: '',
   
  },

  {
    check: false,
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    date: new Date(),
    updatedBy: 'Faruq Olaseni',
    updateDate: new Date(),
    status: '',
  
  },

  {
    check: false,
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    date: new Date(),
    updatedBy: 'Faruq Olaseni',
    updateDate: new Date(),
    status: '',
  
  },

  {
    check: false,
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    date: new Date(),
    updatedBy: 'Faruq Olaseni',
    updateDate: new Date(),
    status: '',
   
  },

  {
    check: false,
    categoriesName: 'Ikeja(IKJ)',
    createdBy: 'faruq@mail.com',
    date: new Date(),
    updatedBy: 'Faruq Olaseni',
    updateDate: new Date(),
    status: '',
    
  },
];

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  subscription = new Subscription();
  // dataSource: MatTableDataSource<any[]> | null = null;
  // dataSource: selection = new SelectionModel<any>(true, []);

  // totalRecords = 10;

  // @ViewChild(MatPaginator) paginator: MatPaginator | any;
  // @ViewChild(MatSort) Sort: MatSort | any;

  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = [
    'check',
    'categoriesName',
    'createdBy',
    'date',
    'updatedBy',
    'updateDate',
    'status',
    'action',
  ];

  dataSource: dummyData[] = [];

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

  editWarehouse(row: any){
    this.dialog.open(NewWarehouseComponent, {
      data: row,
      disableClose: true,
      autoFocus: true,
      panelClass: 'zns-dialog',
      backdropClass: 'zns-dialog-backdrop',
    });
    
  }

  // ngAfterViewInit(): void {
  //   // this.dataSource!.sort = this.Sort;
  //   // this.dataSource!.paginator = this.paginator;
  // }
}
