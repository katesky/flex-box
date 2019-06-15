import { Component, OnInit } from '@angular/core';
import { MarketQueriesStore } from 'src/app/market-queries/stores/market-queries.store';
import { MarketQueriesState } from 'src/app/market-queries/stores/market-queries.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from 'src/app/shared/types/survey.type';
import { State } from 'src/app/core/store/reducers/reducer';
import { selectCountries } from 'src/app/core/store';

@Component({
  selector: 'aon-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss']
})
export class CountrySelectorComponent implements OnInit {

  constructor(private store: Store<State>) { }
  countries$: Observable<Country[]>;

  ngOnInit() {
    this.countries$ = this.store.select(selectCountries);
  }
  countrySelected(item){

  }

}
