import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Wager } from '../../wager/wager';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-summary-statistics',
  templateUrl: './summary-statistics.component.html',
  styleUrls: ['./summary-statistics.component.css']
})
export class SummaryStatisticsComponent implements OnInit {
  wagers: Array<Wager>;
  displayedColumns: Array<string> = ['type', 'numberOfBets', 'wins', 'pushes', 'losses', 'winPerc', 'pushPerc', 'lossPerc',
    'investment', 'grossReturn', 'netReturn', 'roi'];
  summaryDataSource: MatTableDataSource<Summary>;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListWagers().then(event => {
      this.wagers = event.items.filter(wager => wager != null);
      this.wagers = this.wagers.filter(wager => wager.complete);
      this.updateStats();
    });

    this.api.OnCreateWagerListener.subscribe((event: any) => {
      const newWager = event.value.data.onCreateWager;
      if (newWager.complete) {
        this.wagers = [newWager, ...this.wagers];
        this.updateStats();
      }
    })
  }

  updateStats(): void {
    var summary = new Summary(this.wagers);
    var summaries: Array<Summary> = [summary, ];
    this.summaryDataSource = new MatTableDataSource<Summary>(summaries);
  }

}

class Summary {
  'type': string;
  'numberOfBets': number;
  'wins': number;
  'winPerc': number;
  'pushes': number;
  'pushPerc': number;
  'losses': number;
  'lossPerc': number;
  'investment': number;
  'grossReturn': number;
  'netReturn': number;
  'roi': number

  constructor(wagers: Array<Wager>, filterCol: string = null, colName: string = null) {
    if (filterCol != null) {

    }
    else {
      this.type = 'All';
      var completedWagers = wagers.filter(wager => wager.grossReturn != null);
    }

    this.numberOfBets = completedWagers.length;

    this.wins = completedWagers.filter(wager => wager.result == 'Win').length;
    this.pushes = completedWagers.filter(wager => wager.result == 'Push').length;
    this.losses = completedWagers.filter(wager => wager.result == 'Loss').length;


    this.winPerc = this.wins / this.numberOfBets;
    this.pushPerc = this.pushes / this.numberOfBets;
    this.lossPerc = this.losses / this.numberOfBets;

    this.investment = completedWagers.reduce((sum, currentWager) => sum + currentWager.amount, 0);
    this.grossReturn = completedWagers.reduce((sum, currentWager) => sum + currentWager.grossReturn, 0);
    this.netReturn = this.grossReturn - this.investment;
    this.roi = this.netReturn / this.investment;
  }
}
