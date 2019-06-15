import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import {Router} from '@angular/router';

@Injectable()
export class Effects {
  constructor(
    ) {}

  // @Effect()
  // create$ = this.actions$.pipe(
  //   ofType<shoppingCartActions.ActionUnion>(shoppingCartActions.ActionTypes.AddItem),
  //   map(action => action.payload),
  //   exhaustMap((input) => this.shoppingService.getCart().pipe(
  //     map((createdContact: any) => new shoppingCartActions.AddItem(createdContact)),
  //     catchError(err => {
  //       alert(err.message);
  //       return of(new shoppingCartActions.AddItem(0));
  //     })
  //   ))
  // );
}
