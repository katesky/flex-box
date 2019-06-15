import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Query } from '../types/query.type';
import { ReportQueryBreakout } from '../types/report-query-breakout.type';

@Component({
  selector: 'aon-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit {

  constructor() { }

  @Input() query: Query;
  @Output() editQuery = new EventEmitter();

  reportQueryBreakout: ReportQueryBreakout;

  ngOnInit() {
  }
  edit() {
    this.editQuery.emit();
  }
  addBreakout() {
    this.reportQueryBreakout = <ReportQueryBreakout>{ reportQueryId: this.query.reportQueryId, breakoutName:'' };
    console.log(this.reportQueryBreakout);

  }
}
