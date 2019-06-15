import { Action } from '@ngrx/store';

export enum ActionTypes {
  UpdateName = '[Profile] Update Name'
}

export class UpdateName implements Action {
  readonly type = ActionTypes.UpdateName;
  constructor(public payload: number) {}
}

export type ActionsUnion = UpdateName;