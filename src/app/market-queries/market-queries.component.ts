import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ClientAppParameter } from '../shared/interfaces/client-app-parameter';
import { MarketQueriesStore } from './stores/market-queries.store';
import { SubSink } from 'subsink';
import { Dictionary } from '../shared/types/survey.type';
import { MarketQueriesState } from './stores/market-queries.state';
import { Observable } from 'rxjs';
import { IgxToastComponent } from 'igniteui-angular';
import { Query } from './types/query.type';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-market-queries',
  templateUrl: './market-queries.component.html',
  styleUrls: ['./market-queries.component.scss'],
})
export class MarketQueriesComponent implements OnInit, OnDestroy {
  title: string;
  subsink = new SubSink();
  showLoading: boolean;
  notifications: any;
  step = 0;
  jobIndex = 0;
  stopListening: Function;
  showPageFill = true;
  state: MarketQueriesState;
  config: ClientAppParameter;
  reportQuery: Query[];
  currentQuery: Query;
  jobs: Dictionary[];
  jobsList: Dictionary[];
  @ViewChild("toast")
  public toast: IgxToastComponent;
  queryId: number;
  constructor(private store: MarketQueriesStore, route: ActivatedRoute) {

    this.queryId = Number(route.params.pipe(map(p => p.id)));
  }

  ngOnInit() {
    this.subsink.sink = this.store.stateChanged.subscribe(state => {
      this.state = state;
      this.config = state.config;
      this.reportQuery = state.reportQuery;
      this.jobs = state.jobs_selection;
      this.jobsList = state.default_list;
      if (this.queryId) {
        this.currentQuery = this.reportQuery.find(i => i.surveyId === this.queryId);
      }
    });

  }
  ngOnDestroy() {
    this.subsink.unsubscribe();
    this.stopListening();
  }
  selectQuery(item: Query) {
    console.log("asdas")
    this.showPageFill = false;
    this.currentQuery = item;
  }
  editQuery() {
    console.log(this.currentQuery);
  }

  deleteQuery(index: number) {

    this.toast.message = this.reportQuery[index].queryName + " removed.";
    this.reportQuery.splice(index, 1);
    this.toast.show();
  }
  createQuery() {

  }
  selectedItemChanged(item: any) {
    this.jobIndex = item.key;
  }
}
