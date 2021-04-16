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
import { SummaryStatisticsComponent } from './summary-statistics/summary-statistics.component';

import { BasicTableModule } from './templates/basic-table/basic-table.module';
import { BetTrackerComponent } from './bet-tracker/bet-tracker.component'

@NgModule({
  declarations: [
    AppComponent,
    WagerFormComponent,
    SummaryStatisticsComponent,
    BetTrackerComponent
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
    BasicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
