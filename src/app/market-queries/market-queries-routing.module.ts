import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketQueriesComponent } from './market-queries.component';
import { CommonModule } from '@angular/common';
import {
  AuthGuardService as AuthGuard
} from '../core/auth/auth-guard-service'
import { QueryDetailComponent } from './query-detail/query-detail.component';

const routes: Routes = [
 // { path: ':id', component: MarketQueriesComponent, canActivate: [AuthGuard] },
  { path: '', component: MarketQueriesComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketQueriesRoutingModule {
  constructor() {
    console.log("MarketQueriesRoutingModule loaded")
  }
}
