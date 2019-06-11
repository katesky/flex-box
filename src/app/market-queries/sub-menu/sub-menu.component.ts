import { Component, OnInit } from "@angular/core";
import { links } from "./local-data";

@Component({
    selector: "aon-sub-menu",
    templateUrl: "./sub-menu.component.html",
    styleUrls:["./sub-menu.component.scss"]
})

export class SubMenuComponent implements OnInit {
    public list: any[];

    public ngOnInit() {
        this.list = links;
    }
}
