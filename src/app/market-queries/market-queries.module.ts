import { NgModule } from '@angular/core';
import { MarketQueriesRoutingModule } from './market-queries-routing.module';

import { CheckboxComponent } from '../market-queries/checkbox/checkbox.component';
import { JobsDropDownComponent } from '../market-queries/jobs-dropdown/jobs-dropdown.component';
import { PinFloatComponent } from '../market-queries/pin-float/pin-float.component';
import { SubMenuComponent } from '../market-queries/sub-menu/sub-menu.component';
import { ListSample5Component } from '../market-queries/list-sample-5/list-sample-5.component';
import { MarketQueriesComponent } from './market-queries.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IgxListModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxToggleModule, IgxFilterModule,IgxButtonGroupModule, IgxToastModule, IgxTreeGridModule, IgxDividerModule, IgxCardModule } from 'igniteui-angular';
import { AuthGuardService } from '../core/auth/auth-guard-service';
import { AuthService } from '../core/auth/auth.service';
import { AonPageFillComponent } from './page-fill/page-fill.component';
import { QueryDetailComponent } from './query-detail/query-detail.component';
import { RegionsTreeSelectorComponent } from './regions-tree-selector/regions-tree-selector.component';
import { TextInputComponent } from './text-input/text-input.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { DropDownComponent } from './dropdown-list/dropdown.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects as MarketQueryEffects } from './store-not-used-yet/effects/effects';
import * as fromMarketQuery from './store-not-used-yet/index';
import { SearchPipe } from '../shared/pipes/search.pipe';
import { QuerySearchListComponent } from './list-query-search/query-search-list.component';



@NgModule({

  imports: [
    CommonModule,
    MarketQueriesRoutingModule,
   // BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    IgxInputGroupModule,
		IgxDropDownModule,
		IgxIconModule,
		IgxNavbarModule,
		IgxButtonModule,
		IgxToggleModule,
    IgxFilterModule,
    IgxButtonGroupModule,
    IgxToastModule,
    IgxTreeGridModule,
    IgxDividerModule,
    IgxCardModule,
    StoreModule.forFeature('marketQueries', fromMarketQuery.reducers),
    EffectsModule.forFeature([MarketQueryEffects])
  ],
  declarations: [
    MarketQueriesComponent,
    SubMenuComponent,
    JobsDropDownComponent,
    ListSample5Component,
    CheckboxComponent,
    PinFloatComponent,
    AonPageFillComponent,
    QueryDetailComponent,
    RegionsTreeSelectorComponent,
    TextInputComponent,
    CountrySelectorComponent,
    DropDownComponent,
    SearchPipe,
    QuerySearchListComponent,

  ],
  providers: [AuthGuardService, AuthService]
})
export class MarketQueriesModule {
  constructor(){
    console.log("MarketQueriesModule loaded")
  }
}
