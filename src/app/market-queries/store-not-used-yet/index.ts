
import * as fromFeature from './reducers/reducer'
import {createFeatureSelector, createSelector, ActionReducerMap} from "@ngrx/store";

export interface State {
  marketQueries: fromFeature.State;
}

export const reducers: ActionReducerMap<State> = {
  marketQueries: fromFeature.counterReducer,
};

const getState = createFeatureSelector<State>('marketQueries')


