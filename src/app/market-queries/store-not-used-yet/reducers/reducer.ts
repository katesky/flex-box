import { ActionTypes, ActionUnion } from '../actions/actions';
import { init_config, init_query, jobs_selection, default_list, Data } from 'src/app/market-queries/local-test-data';
import { Country } from 'src/app/shared/types/survey.type';

export interface State {
  countries: any[];
}
export const initialState: State = {
  countries: Data.countryData()
};

export function counterReducer(state = initialState, action: ActionUnion): State {
  switch (action.type) {

    default:
      return state;
  }
}
