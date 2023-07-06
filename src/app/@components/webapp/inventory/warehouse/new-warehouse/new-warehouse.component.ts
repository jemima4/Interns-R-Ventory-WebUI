import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-warehouse',
  templateUrl: './new-warehouse.component.html',
  styleUrls: ['./new-warehouse.component.scss'],
})
export class NewWarehouseComponent implements OnInit {
  warehouseForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<NewWarehouseComponent>
  ) {}

  ngOnInit() {
    this.warehouseForm = this.formBuilder.group({
      warehouseName: ['', Validators.required],
      warehouseCode: ['', Validators.required],
    });
  }

  // onSubmitForm(){
  //   if (this.warehouseForm.valid){
  //     console.log(this.warehouseForm.value);
  //   }
  // }
  addWarehouse(){
    console.log(this.warehouseForm.value);
  }
  closeDialog() {
    this.dialogRef.close();
  }

  cancelDialogue(){
      console.log('Cancel button clicked');
  }
}
