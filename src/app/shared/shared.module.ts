import { NgModule } from '@angular/core';

import { ErrorMessage } from './components/error-message.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [ CommonModule,FormsModule],
  declarations: [
    ErrorMessage,
    GroupByPipe],
  providers: [],
  bootstrap: []
})
export class SharedModule {
  constructor(){
    console.log("SharedModule loaded")
  }
}
