import { Component, Input } from '@angular/core';
import { TableBuilder } from './table-builder'

@Component({
  selector: 'basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent{
  @Input() tableBuilder: TableBuilder;
}
