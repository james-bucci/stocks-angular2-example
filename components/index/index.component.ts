import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { StockListComponent } from "../shared/stock-list/stock-list.component";

@Component({
  selector: "index",
  templateUrl: "./components/index/index.html",
  directives: [
    StockListComponent
  ],
  providers: [

  ]
})

export class IndexComponent {

  public constructor() {
  }
}

import "./index.html";
import "./index.scss";
