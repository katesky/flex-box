import { Component, OnInit } from '@angular/core';
import { Data } from '../local-test-data';

@Component({
  selector: 'aon-regions-tree-selector',
  templateUrl: './regions-tree-selector.component.html',
  styleUrls: ['./regions-tree-selector.component.scss']
})
export class RegionsTreeSelectorComponent implements OnInit {

  public data: any[];
  showList: boolean = false;
  placeholder= 'Select a Region';
  collapsed:boolean = false;
  focus = false;
  isDisabled = false;
  constructor() { }

  public ngOnInit() {
      this.data = Data.testData();
  }
}
