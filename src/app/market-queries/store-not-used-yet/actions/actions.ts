import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddItem = '[Cart] Add Item',
  RemoveItem = '[Cart] Remove Item'
}


export class AddItem implements Action {
  readonly type = ActionTypes.AddItem;
  constructor(public payload: number) {}
}

export class RemoveItem implements Action {
  readonly type = ActionTypes.RemoveItem;
  constructor(public payload: number) {}
}

export type ActionUnion = AddItem
  | RemoveItem;
