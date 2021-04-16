import { Component, OnInit, AfterViewInit } from '@angular/core';
import { APIService } from '../API.service';
import { Wager } from '../../wager/wager';
import { TableBuilder } from '../templates/basic-table/table-builder';

@Component({
  selector: 'app-bet-tracker',
  templateUrl: './bet-tracker.component.html',
  styleUrls: ['./bet-tracker.component.css']
})
export class BetTrackerComponent implements OnInit, AfterViewInit {
  summaryStatsTableBuilder: TableBuilder;
  activeBetsTableBuilder: TableBuilder;
  closedBetsTableBuilder: TableBuilder;

  constructor(private api: APIService) {
    this.createActiveBetsBuilder();
    this.createClosedBetsBuilder();
  }

  // try not to use this to set up paginators etc.
  async ngOnInit() {
    this.api.ListWagers().then(event => {
      var wagers = event.items.filter(wager => wager != null);

      this.activeBetsTableBuilder.updateDataSource(this.activeBetFilter(wagers));
      this.closedBetsTableBuilder.updateDataSource(this.closedBetFilter(wagers));
    });
  }

  ngAfterViewInit() {

  }

  createActiveBetsBuilder() {
    var displayedColumns = ['createdAt', 'league', 'betType', 'team', 'period', 'line', 'odds', 'amount'];
    var displayNames = ['Created', 'League', 'Bet Type', 'Team', 'Period', 'Line', 'Odds', 'Amount'];
    var roundedColumns = ['amount'];

    this.activeBetsTableBuilder = new TableBuilder(
      displayedColumns=displayedColumns,
      displayNames=displayNames,
      roundedColumns=roundedColumns
    );
  }

  createClosedBetsBuilder() {
    var displayedColumns = ['createdAt', 'league', 'betType', 'team', 'period', 'line', 'odds', 'amount', 'result', 'grossReturn', 'netReturn'];
    var displayNames = ['Created', 'League', 'Bet Type', 'Team', 'Period', 'Line', 'Odds', 'Amount', 'Result', 'Gross Return', 'Net Return'];
    var roundedColumns = ['amount', 'grossReturn', 'netReturn'];

    this.closedBetsTableBuilder = new TableBuilder(
      displayedColumns=displayedColumns,
      displayNames=displayNames,
      roundedColumns=roundedColumns
    );
  }

  activeBetFilter(wagers: Array<Wager>) {
    return wagers.filter(wager => !wager.complete);
  }

  closedBetFilter(wagers: Array<Wager>) {
    return wagers.filter(wager => wager.complete);
  }

}
