import { ClientAppParameter } from 'src/app/shared/interfaces/client-app-parameter';
import { Query } from '@angular/core';
import { Dictionary } from 'src/app/shared/types/survey.type';


export interface MarketQueriesState {
  config: ClientAppParameter;
  reportQuery: Query[];
  jobs_selection:Dictionary[];
  default_list: Dictionary[];
}
