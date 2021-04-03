import { Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../API.service';
import { Wager } from '../../wager/wager';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-closed-bet',
  templateUrl: './closed-bet.component.html',
  styleUrls: ['./closed-bet.component.css']
})
export class ClosedBetComponent implements OnInit {
  wagers: Array<Wager>;
  wagerDataSource: MatTableDataSource<Wager>;

  displayedColumns: Array<string> = ['league', 'betType', 'team', 'period', 'line', 'odds',
    'amount', 'result', 'grossReturn', 'netReturn']

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListWagers().then(event => {
      this.wagers = event.items;
      this.wagers = this.wagers.filter(wager => wager.complete);
      this.wagerDataSource = new MatTableDataSource<Wager>(this.wagers);
    });

    this.api.OnCreateWagerListener.subscribe((event: any) => {
      const newWager = event.value.data.onCreateWager;
      if (newWager.complete) {
        this.wagers = [newWager, ...this.wagers];
        this.wagerDataSource = new MatTableDataSource<Wager>(this.wagers);
      }
    })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.wagerDataSource.paginator = this.paginator;
  }
}
