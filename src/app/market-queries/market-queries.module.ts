import { NgModule } from '@angular/core';
import { MarketQueriesRoutingModule } from './market-queries-routing.module';

import { CheckboxComponent } from '../market-queries/checkbox/checkbox.component';
import { JobsDropDownComponent } from '../market-queries/jobs-dropdown/jobs-dropdown.component';
import { PinFloatComponent } from '../market-queries/pin-float/pin-float.component';
import { SubMenuComponent } from '../market-queries/sub-menu/sub-menu.component';
import { ListSample5Component } from '../market-queries/list-sample-5/list-sample-5.component';
import { QuerySearchListComponent } from '../market-queries/list-query-search/query-search-list.component';
import { MarketQueriesComponent } from './market-queries.component';
import { CommonModule } from '@angular/common';
import { IgniteuiAngularModule } from '../shared/igniteui.angular.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { IgxListModule, IgxInputGroupModule, IgxDropDownModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxToggleModule, IgxFilterModule } from 'igniteui-angular';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



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
    IgxFilterModule
  ],
  declarations: [
    MarketQueriesComponent,
    SubMenuComponent,
    QuerySearchListComponent,
    JobsDropDownComponent,
    ListSample5Component,
    CheckboxComponent,
    PinFloatComponent
    /* QuerySearchListComponent,
    ,
    CheckboxComponent,
    PinFloatComponent,
    SubMenuComponent,
    ListSample5Component */
  ],
})
export class MarketQueriesModule {
  constructor(){
    console.log("MarketQueriesModule loaded")
  }
}
