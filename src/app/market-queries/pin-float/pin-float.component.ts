import { Observable } from "rxjs";
import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from "@angular/core";
import { IgxRadioComponent } from "igniteui-angular";
@Component({
    selector: "aon-pin-float",
    templateUrl: "./pin-float.component.html",
    styleUrls:["./pin-float.component.scss"]
})

export class PinFloatComponent implements OnInit {

    toolboxWidth: number;
    isScrolling = false;
    $el: any;
    @Input() floatClass: string;
    @Input() selectedItem: number;
    @Output() selectedItemChanged: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit() { }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scrollEvent, true);
    }

    ngAfterViewInit() {
        this.$el = $('.' + this.floatClass);
        this.toolboxWidth = this.$el.width();
        if (this.floatClass.length > 0 && this.$el.length > 0) {
            window.addEventListener('resize', () => {
                this.toolboxWidth = this.$el.width();
            }, true); //third parameter

            window.addEventListener('scroll', this.scrollEvent, true);
        }
    }

    ispin = true;
    togglepin() {
        console.log("pin")
        this.ispin = !this.ispin;
        if (!this.ispin) {
            //this.isScrolling = false;
            window.removeEventListener('scroll', this.scrollEvent, true);
            this.$el.css({ 'position': 'static', 'top': '2px', 'z-index': 99 });
        }else{
            window.addEventListener('scroll', this.scrollEvent, true);

        }
    }
    change(item: number) {
        this.selectedItemChanged.emit(item)
    }

    scrollEvent = (event: any): void => {
        //handle your scroll here
        //notice the 'odd' function assignment to a class field
        //this is used to be able to remove the event listener
        const number = event.srcElement.scrollTop;
        console.log("scrolling: " + number);




        var isPositionFixed = (this.$el.css('position') == 'fixed');
        console.log("position: " + this.$el.css('position'));
        console.log("scrollTop: " + $(event.srcElement).scrollTop());
        console.log("width1: " + this.toolboxWidth);


        if ($(event.srcElement).scrollTop() > 200 && !isPositionFixed) {
            this.$el.css({ 'position': 'fixed', 'top': '2px', 'z-index': 9,'width': this.toolboxWidth + 'px'  });

            this.isScrolling = true;
        }
        if ($(event.srcElement).scrollTop() < 200 && isPositionFixed) {
            this.$el.css({ 'position': 'static','top': '', 'width': '' });
            this.isScrolling = false
            //this.toolboxWidth = $(this.floatClass).width();
        }
        console.log("width: " + this.$el.width());


    };

}

