import { Component, OnInit, Query } from '@angular/core';
import { ClientAppParameter } from '../shared/interfaces/client-app-parameter';
import { MarketQueriesStore } from '../core/stores/market-queries.store';
import { SubSink } from 'subsink';
import { Dictionary } from '../shared/types/survey.type';

@Component({
  selector: 'app-market-queries',
  templateUrl: './market-queries.component.html',
  styleUrls: ['./market-queries.component.scss'],
})
export class MarketQueriesComponent implements OnInit {
  title: string;
  config: ClientAppParameter;
  reportQuery: Query[];
  subsink = new SubSink();
  showLoading: boolean;
  notifications: any;
  jobs: Dictionary[];
  jobsList: Dictionary[];
  step = 0;
  jobIndex = 0;
  constructor(private store: MarketQueriesStore) { }

  ngOnInit() {
    this.subsink.sink = this.store.stateChanged.subscribe(state => {
      this.config = state.config;
      this.reportQuery = state.reportQuery;
      this.jobs = state.jobs_selection;
      this.jobsList = state.default_list;
    });

  }
  ngOnDestroy() {
    this.subsink.unsubscribe();
  }
  deleteQuery() {

  }
  createQuery() {

  }
  selectedItemChanged(item: any) {
    this.jobIndex = item.key;
  }
}
