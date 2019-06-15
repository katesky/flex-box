import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { SharedSurveyServiceRadfordService } from 'src/app/shared/services/shared-survey-service-radford.service';
import { CommonServiceRadfordService } from 'src/app/shared/services/common-service-radford.service';
import { MarketQueriesState } from './market-queries.state';
import { MarketQueriesService } from '../../shared/services/market-queries.service';
import { init_config ,init_query, default_list, jobs_selection} from 'src/app/market-queries/local-test-data';



@Injectable({
  providedIn: 'root'
})
export class MarketQueriesStore extends ObservableStore<MarketQueriesState> {

  customersUrl = 'assets/customers.json';

  /* constructor(private http: HttpClient) {
    super({ trackStateHistory: true, logStateChanges: true });
  } */
  constructor(private http: HttpClient,
    private marketQueriesService: MarketQueriesService,
    private sharedSurveyService: SharedSurveyServiceRadfordService,
    private commonService: CommonServiceRadfordService) {
    super({ trackStateHistory: true, logStateChanges: false });
    let initialState: MarketQueriesState = {
      config: init_config,
      reportQuery:init_query,
      jobs_selection:jobs_selection,
      default_list: default_list
    }
    this.setState(initialState, MarketQueriesStoreActions.InitializeState);

  // this.fetchConfig();
  }
  /*  private fetchCustomers() {
     return this.http.get<Customer[]>(this.customersUrl)
       .pipe(
         map(customers => {
           this.setState({ customers }, MarketQueriesStoreActions.GetCustomers);
           return customers;
         }),
         catchError(this.handleError)
       );
   } */
  private fetchConfig() {
    console.log("get")
    return this.sharedSurveyService.getAppParameter("MultipleCuts")
      .subscribe(config => {
          this.setState({ config }, MarketQueriesStoreActions.GetConfig);
          return config;
        },  catchError(this.handleError))
  }
  getAppParameter() {
    const state = this.getState();
    // pull from store cache
    if (state && state.config) {
      console.log('stateHistory:', this.stateHistory);
      return of(state.config);
    }
    // doesn't exist in store so fetch from server
    else {
      return this.fetchConfig();
    }
  }



  /*   getCustomers() {
      const state = this.getState();
      // pull from store cache
      if (state && state.customers) {
        console.log('stateHistory:', this.stateHistory);
        return of(state.customers);
      }
      // doesn't exist in store so fetch from server
      else {
        return this.fetchCustomers();
      }
    }

    getCustomer(id: number) {
      return this.getCustomers()
        .pipe(
          map(custs => {
            let filteredCustomers = custs.filter(cust => cust.id === id);
            let customer = (filteredCustomers && filteredCustomers.length) ? filteredCustomers[0] : null;
            this.setState({ customer }, MarketQueriesStoreActions.GetCustomer);
            return customer;
          })
        );
    } */

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}

export enum MarketQueriesStoreActions {
  GetCustomers = 'get_customers',
  GetCustomer = 'get_customer',
  GetConfig = 'get_config',
  InitializeState = 'initialize_state'
}
