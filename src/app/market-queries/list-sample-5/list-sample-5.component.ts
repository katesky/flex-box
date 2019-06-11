import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { IgxFilterOptions, IgxToggleDirective } from "igniteui-angular";

import { Observable } from "rxjs";
import { Query } from "../types/query.type";
@Component({
  selector: "aon-job-search",
  templateUrl: "./list-sample-5.component.html",
  styleUrls: ['./list-sample-5.component.scss']
})
export class ListSample5Component implements OnInit {
  public searchContact: string;
  showList: boolean = false;

  @Input() list: Observable<Query[]>;
  @Input() isDisabled: boolean;
  @Input() focus: boolean;

  @ViewChild(IgxToggleDirective) toggle: IgxToggleDirective;

  public density = "comfortable";
  public displayDensities;

  constructor() { }

  public ngOnInit() {
    this.displayDensities = [
      { label: "comfortable", selected: this.density === "comfortable", togglable: true },
      { label: "cosy", selected: this.density === "cosy", togglable: true },
      { label: "compact", selected: this.density === "compact", togglable: true }
    ];
  }

  public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
  }

  public toggleFavorite(survey: Query) {
    survey.isSystemQuery = !survey.isSystemQuery;
  }

  get filterContacts() {
    this.showList = true;
    const fo = new IgxFilterOptions();
    fo.key = "queryName";
    fo.inputValue = this.searchContact;
    return fo;
  }
  toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open();
    } else {
      this.toggle.close();
    }
  }
  openDropDown(){

  }
}
