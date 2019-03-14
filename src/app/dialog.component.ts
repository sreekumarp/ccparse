import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColDef, GridOptions } from 'ag-grid-community';
import * as moment from 'moment';
import { Entry } from './data';

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.component.html'
})
export class DialogOverviewExampleDialog {
  gridOptions: GridOptions;
  entires: Entry[];
  public columnDefs: ColDef[];
  amount: number;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Entry[]
  ) {
    this.gridOptions = {
      defaultColDef: {
        editable: true
      },
      animateRows: true,
      getDataPath: function(data) {
        return data.amountEntries;
      },
      onGridReady: function(params) {
        params.api.sizeColumnsToFit();
      }
    };
  }

  ngOnInit(): void {
    //this._loadingService.register('items.load');

    this.createColumnDefs();
    this.entires = this.data;

    this.amount = parseFloat(
      this.data
        .map(entry => entry.amount)
        .reduce((a, b) => {
          return a + b;
        }, 0)
        .toFixed(2)
    );
  }

  private createColumnDefs() {
    this.columnDefs = [];

    //TODO: move this to report configuation with an static field/col name
    this.columnDefs.push({
      headerName: 'Date',
      field: 'date',
      valueFormatter: data => moment(data.value).format('DD-MMM-YYYY'),
      width: 93
    });
    this.columnDefs.push({ headerName: 'Name', field: 'name', width: 100 });
    this.columnDefs.push({ headerName: 'Description', field: 'description' });
    //this.columnDefs.push({ headerName: 'DescriptionComment', field: 'descriptionComment' });
    this.columnDefs.push({ headerName: 'Amount', field: 'amount', width: 100 });
    //this.columnDefs.push({ headerName: 'IsCiti', field: 'isCiti' });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
