import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Stock } from "../../../models/_models";

@Component({
  selector: "stock",
  templateUrl: "./components/shared/stock/stock.html",
  providers: [
  ]
})

export class StockComponent {
  @Input() public stock: Stock;

  public constructor() {
  }
}

import "./stock.html";
import "./stock.scss";
