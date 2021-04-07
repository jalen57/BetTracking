import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { TableBuilder } from './table-builder'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'

@Component({
  selector: 'ouds-table',
  templateUrl: './ouds-table.component.html',
  styleUrls: ['./ouds-table.component.css']
})
export class OudsTableComponent<T> {
  @Input() tableBuilder: TableBuilder;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    if (this.tableBuilder.hasPaginator) {
      this.tableBuilder.dataSource.paginator = this.paginator;
      this.tableBuilder.dataSource.sort = this.sort;
    }
  }
}
