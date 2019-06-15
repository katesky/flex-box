import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {Action} from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import * as counterAction from '../actions/actions';

@Injectable()
export class Effects {
  constructor(
    private actions$: Actions, 
    //private authService: AuthService, 
    private router: Router) {}

  // @Effect()
  // login$: Observable <Action> = this
  //   .actions$
  //   .pipe(ofType<counterAction.Increment>(counterAction.ActionTypes.Increment), 
  //     mergeMap(action => this.authService.login(action.payload).pipe(
  //   // If successful, dispatch success action with result
  //   map(data => ({type: authAction.LoginActionTypes.LOGIN_SUCCESS})),
  //   // If request fails, dispatch failed action
  //   catchError(() => of({type: authAction.LoginActionTypes.LOGIN_FAIL})))));

  // @Effect({dispatch: false})
  // loginSuccess$ = this
  //   .actions$
  //   .pipe(ofType(authAction.LoginActionTypes.LOGIN_SUCCESS), tap(() => this.router.navigate(['/portal'])));  
}
