import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';
import { Wager } from '../../wager/wager'

@Component({
  selector: 'app-wager-form',
  templateUrl: './wager-form.component.html',
  styleUrls: ['./wager-form.component.css']
})
export class WagerFormComponent implements OnInit {
  public wagerForm: FormGroup;

  leagueNames: Array<string> = ['MLB', 'NBA', 'NFL', 'NHL'];
  betTypes: Array<string> = ['Point Spread', 'Money Line', 'Total'];
  teams: Array<string> = ['Home', 'Away'];
  periods: Array<string> = [];
  results: Array<string> = ['Win', 'Push', 'Loss']

  constructor(private api: APIService, private formBuilder: FormBuilder) { }

  async ngOnInit() {
    this.wagerForm = this.formBuilder.group({
      league: '',
      betType: '',
      team: null,
      period: '',
      line: null,
      odds: 100,
      amount: 1,
      complete: false,
      result: null,
      grossReturn: null,
      netReturn: null
    });
    this.wagerForm.get('result').disable();
    this.onChanges();
  }

  public onCreate(wager: Wager) {
    wager = this.calculateProfit(wager);
    this.api.CreateWager(wager).then(event => {
      console.log('wager created');
      this.wagerForm.reset();
    })
    .catch(e => {
      console.log('error creating wager...', e)
    });
  }

  onChanges(): void {
    this.wagerForm.get('league').valueChanges.subscribe(val => {
      if (val == 'MLB') {
        this.periods = ['Full Game', 'First5'];
      }
      else if (val == 'NHL') {
        this.periods = ['Full Game', 'P1', 'P2', 'P3'];
      }
      else if (val == 'NBA') {
        this.periods = ['Full Game', 'First Half', 'Second Half', 'Q1', 'Q2', 'Q3', 'Q4']
      }
      else if (val == 'NFL') {
        this.periods = ['Full Game', 'First Half', 'Second Half', 'Q1', 'Q2', 'Q3', 'Q4']
      }
    });

    this.wagerForm.get('betType').valueChanges.subscribe(val => {
      if (val == 'Total') {
        this.wagerForm.get('team').patchValue(null);
        this.wagerForm.get('team').disable();

        this.wagerForm.get('line').enable();
      }
      else if (val == 'Money Line') {
        this.wagerForm.get('team').enable();

        this.wagerForm.get('line').patchValue(null);
        this.wagerForm.get('line').disable();
      }
      else {
        this.wagerForm.get('team').enable();
        this.wagerForm.get('line').enable();
      }
    });

    this.wagerForm.get('complete').valueChanges.subscribe(val => {
      if (val) {
        this.wagerForm.get('result').enable();
      }
      else {
        this.wagerForm.get('result').patchValue(null);
        this.wagerForm.get('result').disable();
      }
    });
  }

  calculateProfit(wager: Wager): Wager {
    if (wager.result != null) {
      if (wager.result == 'Win') {
        if (wager.odds >= 0) {
          wager.grossReturn = wager.amount + (wager.amount / 100) * wager.odds;
        }
        else {
          wager.grossReturn = wager.amount + 100 * (wager.amount / (-1 * wager.odds))
        }
      }
      else if (wager.result == 'Push') {
        wager.grossReturn = wager.amount;
      }
      else if (wager.result == 'Loss') {
        wager.grossReturn = 0;
      }
      wager.netReturn = wager.grossReturn - wager.amount;


    }
    return wager;
  }

}
