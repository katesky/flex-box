import { Component, OnInit } from "@angular/core";
import { links } from "./local-data";
import { RestUrlService } from 'src/app/shared/services/rest-url.service';

@Component({
  selector: "aon-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.scss"]
})

export class SubMenuComponent implements OnInit {
  constructor(private urlService: RestUrlService) { }

  public list: any[];

  public ngOnInit() {
    this.list = links;
  }
  passLink(item: any) {
    console.log(item)
    this.urlService.redirect(item)
  }
}
