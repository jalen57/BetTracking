import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
/*
 * material imports
 * import {} from '@angular/material'
 */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'

/*
 * Amplify Angular UI Module
 */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WagerFormComponent } from './wager-form/wager-form.component';
import { ActiveBetComponent } from './active-bet/active-bet.component';
import { ClosedBetComponent } from './closed-bet/closed-bet.component';
import { SummaryStatisticsComponent } from './summary-statistics/summary-statistics.component';

import { OudsTableModule } from './templates/ouds-table/ouds-table.module'

@NgModule({
  declarations: [
    AppComponent,
    WagerFormComponent,
    ActiveBetComponent,
    ClosedBetComponent,
    SummaryStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    AmplifyUIAngularModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    OudsTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
