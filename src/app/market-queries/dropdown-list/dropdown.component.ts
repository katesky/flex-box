
import { Observable, } from "rxjs";
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from "@angular/core";
import {
  ConnectedPositioningStrategy, IgxDropDownComponent, IgxInputGroupComponent, ISelectionEventArgs, HorizontalAlignment, IgxFilterOptions
} from "igniteui-angular";
import { Dictionary } from 'src/app/shared/types/survey.type';


@Component({
  selector: "aon-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})

export class DropDownComponent implements OnInit {

  @Input() list: Observable<Dictionary>[]
  @Input() preselect: boolean;
  @Input() isDisabled: boolean;
  @Input() focus: boolean;
  @Input() withCreateNew: boolean;
  @Input() title: boolean;
  @Input() isSearchable: boolean;
  searchText ='';

  @ViewChild("dropDown", { read: IgxDropDownComponent }) public igxDropDown: IgxDropDownComponent;
  @ViewChild("inputGroup", { read: IgxInputGroupComponent }) public inputGroup: IgxInputGroupComponent;
  @Output() selectedItemChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() createNewItem = new EventEmitter<any>();
  placeholder = 'Select';
  ngOnInit(): void {
    if (this.isDisabled) {
      this.placeholder = '';
    }
  }

  createNew() {
    this.igxDropDown.close();
    this.createNewItem.emit()

  }
  change(item: ISelectionEventArgs) {
    let itemFound = this.list.filter((_list, index) => {
      if (index == item.newSelection.index) {
        return _list;
      }
    })
    this.selectedItemChanged.emit(item.newSelection.value)
  }

  ngOnChanges(): void {
    if (this.isDisabled) {
      this.placeholder = '';
    } else {
      this.placeholder = 'Select';
    }
  }

  ngAfterViewInit(): void {
    if (this.preselect) {
      Promise.resolve(null).then(() => {
        this.igxDropDown.setSelectedItem(0);
      });
    }


  }

  toggleContent() {
    if (!this.igxDropDown.collapsed) {
      this.igxDropDown.close();
    }
    this.openDropDown();
  }
  public openDropDown() {
    console.log("open dropdown")
    if (this.igxDropDown.collapsed) {
      this.igxDropDown.width = this.inputGroup.element.nativeElement.offsetWidth + 'px';
      this.igxDropDown.open({
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy({
          target: this.inputGroup.element.nativeElement,
          horizontalDirection: HorizontalAlignment.Right,
        })
      });
    }
  }
}

