import * as fromCounter from './reducers/reducer'
import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";

export interface State {
    profile: fromCounter.State;

}

export const reducers: ActionReducerMap<State> = {
  profile: fromCounter.counterReducer,
};

const getProfileState = createFeatureSelector<fromCounter.State>('profile');


export const selectUsername = createSelector(
  getProfileState,  state => {    return state.username  }
);
export const selectCountries = createSelector(
  getProfileState,  state => {    return state.countries  }
);
