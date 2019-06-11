import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from "@angular/core";
import { IgxFilterOptions, IgxListComponent } from "igniteui-angular";
import { Query } from "../types/query.type";
@Component({
  selector: "aon-query-search-list",
  styleUrls: ["./query-search-list.component.scss"],
  templateUrl: "./query-search-list.component.html"
})
export class QuerySearchListComponent implements OnInit {
  public searchContact: string;
  showList: boolean = false;
  hover: boolean = false;
  isLoading: boolean = false;
  @Input() list: Query[];
  @Input() focus: boolean;
  @Output() createQuery = new EventEmitter();
  @Output() selectQuery = new EventEmitter<Query>();
  @Output() deleteQuery = new EventEmitter<Query>();

  onItemClicked(i: any) {
    console.log(i);
  }
  select(item: Query) {
    this.selectQuery.emit(item);
    this.showList = false;
  }
  delete(item: Query) {
    this.deleteQuery.emit(item);
    this.showList = false;
  }
  create() {
    this.showList = false;
    this.createQuery.emit()
  }

  public density = "cosy";
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

  public toggleFavorite(query: Query) {
    query.isSystemQuery = !query.isSystemQuery;
  }

  get filterContacts() {
    this.showList = true;
    const fo = new IgxFilterOptions();
    fo.key = "queryName";
    fo.inputValue = this.searchContact;
    return fo;
  }
  ngAfterViewInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
  openDropDown() {

  }
}
