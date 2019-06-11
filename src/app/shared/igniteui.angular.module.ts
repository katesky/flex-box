import { NgModule } from '@angular/core';
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
    IgxRadioModule
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        IgxCheckboxModule,
        IgxDropDownModule,
        IgxInputGroupModule,
        IgxRippleModule,
        IgxIconModule,
        IgxToggleModule,
        IgxComboModule,
        IgxButtonModule,
        IgxAvatarModule,
        IgxFilterModule,
        IgxListModule,
        IgxButtonGroupModule,
        IgxDividerModule,
        IgxSelectModule,
        IgxRadioModule,
        NoopAnimationsModule
    ],
    exports: [
      BrowserAnimationsModule,
      FormsModule,
      IgxCheckboxModule,
      IgxDropDownModule,
      IgxInputGroupModule,
      IgxRippleModule,
      IgxIconModule,
      IgxToggleModule,
      IgxComboModule,
      IgxButtonModule,
      IgxAvatarModule,
      IgxFilterModule,
      IgxListModule,
      IgxButtonGroupModule,
      IgxDividerModule,
      IgxSelectModule,
      IgxRadioModule,
      NoopAnimationsModule
  ]

})

export class IgniteuiAngularModule {
  constructor(){
    console.log("IgniteuiAngularModule loaded")
  }
 }
