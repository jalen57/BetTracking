import { Component, OnInit} from '@angular/core';
import { APIService } from '../API.service';
import { Wager } from '../../wager/wager';
import { TableBuilder } from '../templates/ouds-table/table-builder'

@Component({
  selector: 'app-active-bet',
  templateUrl: './active-bet.component.html',
  styleUrls: ['./active-bet.component.css']
})
export class ActiveBetComponent implements OnInit {
  tableBuilder: TableBuilder;

  ///////////////////////////////////////////////////////////////////////
  constructor(private api: APIService) {
    var displayedColumns = ['league', 'betType', 'team', 'period', 'line', 'odds', 'amount'];
    var displayNames = ['League', 'Bet Type', 'Team', 'Period', 'Line', 'Odds', 'Amount']
    var hasPaginator = true;
    var paginatorOptions = [5, 10, 25];

    this.tableBuilder = new TableBuilder(
      displayedColumns=displayedColumns,
      displayNames=displayNames,
      hasPaginator=hasPaginator,
      paginatorOptions=paginatorOptions
    )
  }

  async ngOnInit() {
    this.api.ListWagers().then(event => {
      var wagers = this.wagerFilter(event.items);
      this.tableBuilder.updateDataSource(wagers);
    });

    this.api.OnCreateWagerListener.subscribe((event: any) => {
      const newWager = event.value.data.onCreateWager;
      if (!newWager.complete) {
      }
    })
  }

  wagerFilter(wagers: Array<Wager>): Array<Wager> {
    return wagers
    .filter(wager => wager != null)
    .filter(wager => !wager.complete);
  }
}
