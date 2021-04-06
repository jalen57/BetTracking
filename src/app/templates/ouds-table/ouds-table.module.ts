import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table'

import { OudsTableComponent } from './ouds-table.component'

@NgModule({
  declarations: [
    OudsTableComponent,
  ],
  exports: [
    OudsTableComponent,
  ],
  imports: [
    MatTableModule
  ]
})
export class OudsTableModule {

}
