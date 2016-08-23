import { Component } from "@angular/core";
import { Stock } from "../../../models/_models";
import { StockComponent } from "../stock/stock.component";
import { StockService } from "../../../services/stock.service";

@Component({
  selector: "stock-list",
  templateUrl: "./components/shared/stock-list/stock-list.html",
  providers: [
    StockService
  ],
  directives: [
    StockComponent
  ]
})

export class StockListComponent {
  public searchTerm: string;
  public stocks: Array<Stock>;

  public constructor(private stockService: StockService) {
    this.stocks = new Array<Stock>();
  }

  public search() {
    this.stockService.get(this.searchTerm).then(stock => this.stocks.push(stock));
    this.searchTerm = null;
  }

}

import "./stock-list.html";
import "./stock-list.scss";
