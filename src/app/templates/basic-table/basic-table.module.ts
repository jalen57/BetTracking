import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

import { BasicTableComponent } from './basic-table.component'

@NgModule({
  declarations: [
    BasicTableComponent,
  ],
  exports: [
    BasicTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class BasicTableModule {

}
