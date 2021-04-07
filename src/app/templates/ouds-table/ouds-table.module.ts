import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

import { OudsTableComponent } from './ouds-table.component'

@NgModule({
  declarations: [
    OudsTableComponent,
  ],
  exports: [
    OudsTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
})
export class OudsTableModule {

}
