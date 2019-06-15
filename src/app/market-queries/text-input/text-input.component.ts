import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aon-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() placeholder : string;
  @Input() value : string;
  @Input() isDisabled : boolean;
  focus= false;

  constructor() { }
  ngOnInit() {
  }

}
