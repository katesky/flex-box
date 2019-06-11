import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketQueriesComponent } from './market-queries.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '', component: MarketQueriesComponent
  }
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
