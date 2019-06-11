import { Component, Input, Output, ElementRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'error-message',
    templateUrl: './error-message.component.html',
    styleUrls: ['./error-message.component.css']
})

export class ErrorMessage {

    @Input("errMessage") errMessage: string;
    displayError: boolean = false;

    ngOnInit() {
        this.displayError = true;
        setTimeout(function () {
            this.displayError = false;
            console.log(this.displayError);
        }.bind(this), 5000);
    }

}

