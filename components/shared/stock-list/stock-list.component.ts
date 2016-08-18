import { Component } from "@angular/core";

import { Stock } from "../../../models/_models";

import { StockComponent } from "../stock/stock.component";

@Component({
  selector: "stock-list",
  templateUrl: "./components/shared/stock-list/stock-list.html",
  providers: [
  ],
  directives: [
    StockComponent
  ]
})

export class StockListComponent {
  public searchTerm: string;
  public stocks: Array<Stock>;

  public constructor() {
    this.stocks = new Array<Stock>();
  }

  public search() {
    this.stocks.push(new Stock(this.searchTerm));
    this.searchTerm = null;
  }
}

import "./stock-list.html";
import "./stock-list.scss";
