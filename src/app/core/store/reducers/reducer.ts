import { Action } from '@ngrx/store';
import { ActionsUnion } from '../actions/actions';
import { Data } from 'src/app/market-queries/local-test-data';

export interface State {
  username: string
  name: {
    firstName: string,
    lastName: string
  },
  countries : any[]
}

export const initialState: State = {
  username: "",
  name: {
    firstName: "John",
    lastName: "Demo"
  },
  countries: Data.countryData()
};

export function counterReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    default:
      return state;
  }
}
