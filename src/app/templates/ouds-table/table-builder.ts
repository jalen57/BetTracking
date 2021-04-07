import { MatTableDataSource } from '@angular/material/table';


export class TableBuilder {
  displayedColumns: Array<string>;

  displayNameLookup: {[key: string]: string} = {};
  dataSource;

  hasPaginator: boolean;
  pageSizeOptions: Array<number>;


  constructor(
    displayedColumns: Array<string>,
    displayNames: Array<string>,
    hasPaginator: boolean = true,
    pageSizeOptions: Array<number> = [5, 10, 20],

    ){
    for (let i = 0; i < displayNames.length; i++) {
      this.displayNameLookup[displayedColumns[i]] = displayNames[i];
    }

    this.hasPaginator = hasPaginator;
    this.pageSizeOptions = pageSizeOptions;
    this.displayedColumns = displayedColumns;

    var tableData: Array<{[key: string] : any;}> = [];
    this.updateDataSource(tableData);
  }

  updateDataSource(tableData: Array<{[key: string] : any;}>) {
    this.dataSource = new MatTableDataSource(tableData);
  }
}
