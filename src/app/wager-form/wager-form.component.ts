import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../API.service';
import { Wager } from '../../types/wager'

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
      inProgress: false,
      result: null,
      grossReturn: null,
      netReturn: null
    });

    this.onChanges();
  }

  public onCreate(wager: Wager) {
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

    this.wagerForm.get('inProgress').valueChanges.subscribe(val => {
      if (val) {
        this.wagerForm.get('result').patchValue(null);
        this.wagerForm.get('result').disable();
      }
      else {
        this.wagerForm.get('result').enable();
      }
    });
  }

}
