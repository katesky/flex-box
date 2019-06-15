import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  IgxDropDownModule,
  IgxInputGroupModule,
  IgxToggleModule,
  IgxButtonModule,
  IgxFilterModule,
  IgxIconModule,
  IgxListModule,
  IgxNavbarModule
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromRoot from './core/store/index';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { Effects as ProfileEffects } from './core/store/effects/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
    IgxFilterModule,
    StoreModule.forRoot(fromRoot.reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ProfileEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule loaded")
  }
}
