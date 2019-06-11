import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketQueriesModule } from './market-queries/market-queries.module';
import { SharedModule } from './shared/shared.module';
import { IgniteuiAngularModule } from './shared/igniteui.angular.module';
import * as $ from "jquery";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxCheckboxModule,
  IgxDropDownModule,
  IgxInputGroupModule,
  IgxRippleModule,
  IgxToggleModule,
  IgxButtonModule,
  IgxComboModule,
  IgxAvatarModule,
  IgxFilterModule,
  IgxIconModule,
  IgxListModule,
  IgxButtonGroupModule,
  IgxDividerModule,
  IgxSelectModule,
  IgxRadioModule,
  IgxNavbarModule
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { QuerySearchListComponent } from './market-queries/list-query-search/query-search-list.component';
import { JobsDropDownComponent } from './market-queries/jobs-dropdown/jobs-dropdown.component';
import { CheckboxComponent } from './market-queries/checkbox/checkbox.component';
import { PinFloatComponent } from './market-queries/pin-float/pin-float.component';
import { SubMenuComponent } from './market-queries/sub-menu/sub-menu.component';
import { ListSample5Component } from './market-queries/list-sample-5/list-sample-5.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxListModule,
    IgxInputGroupModule,
		IgxDropDownModule,
		IgxIconModule,
		IgxNavbarModule,
		IgxButtonModule,
		IgxToggleModule,
    SharedModule,
    AppRoutingModule,
    IgxFilterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule loaded")
  }
}
