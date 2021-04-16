import { MatTableDataSource } from '@angular/material/table';

export class TableBuilder {
  displayedColumns: Array<string>;
  displayNameLookup: {[key: string]: string} = {};
  roundColumnLookup: {[key: string]: boolean} = {};
  dataSource;

  constructor(
    displayedColumns: Array<string>,
    displayNames: Array<string>,
    roundedColumns: Array<string> = []
  ){
    for (let i = 0; i < displayNames.length; i++) {
      this.displayNameLookup[displayedColumns[i]] = displayNames[i];
    }
    this.displayedColumns = displayedColumns;

    // init rounding columns to false
    this.displayedColumns.forEach( (columnName) => {
      this.roundColumnLookup[columnName] = false;
    });
    // set rounding columns to true
    roundedColumns.forEach( (columnName) => {
      this.roundColumnLookup[columnName] = true;
    });

    var tableData: Array<{[key: string] : any;}> = [];
    this.updateDataSource(tableData);
  }

  updateDataSource(tableData: Array<{[key: string] : any;}>) {
    this.dataSource = new MatTableDataSource(tableData);
  }
}
