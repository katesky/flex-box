import { Component, OnInit } from "@angular/core";

@Component({
    selector: "aon-checkbox",
    templateUrl: "./checkbox.component.html",
    styleUrls:["./checkbox.component.scss","checkbox.component.1.scss"]
})
export class CheckboxComponent implements OnInit {
    checked = false;
    indeterminate = false;
    labelPosition = 'after';
    disabled = false;
    public tasks = [
        { done: true, description: "Research" },
        { done: true, description: "Implement" },
        { done: false, description: "Test" }
    ];


    constructor() { }

    public ngOnInit() {
    }

}
