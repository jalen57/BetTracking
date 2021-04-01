import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { Wager } from '../../types/wager'

@Component({
  selector: 'app-closed-bet',
  templateUrl: './closed-bet.component.html',
  styleUrls: ['./closed-bet.component.css']
})
export class ClosedBetComponent implements OnInit {
  wagers: Array<Wager>;

  constructor(private api: APIService) { }

  async ngOnInit() {
    this.api.ListWagers().then(event => {
      this.wagers = event.items;
      this.wagers = this.wagers.filter(wager => wager.complete)
    });

    this.api.OnCreateWagerListener.subscribe((event: any) => {
      const newWager = event.value.data.onCreateWager;
      if (newWager.complete) {
        this.wagers = [newWager, ...this.wagers];
      }
    })
  }

}
