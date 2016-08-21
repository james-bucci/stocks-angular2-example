import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs/Rx';

import { Stock } from "../../../models/_models";

import { StockService } from "../../../services/stock.service";

@Component({
  selector: "stock",
  templateUrl: "./components/shared/stock/stock.html",
  providers: [
    StockService
  ],
})

export class StockComponent {
  @Input() public stock: Stock;

  ngOnInit(){
    Observable.timer(5000,5000).subscribe(() => {
      console.log(`Refreshing ${this.stock.ticker}`);
      this.stockService.get(this.stock.ticker).then(stock => Object.assign(this.stock, stock));
    });
  }

  public constructor(private stockService : StockService) {
  }

  public isGreen() : boolean {
    return this.stock.currentChangePct >= 0;
  }

  public isRed() : boolean {
    return this.stock.currentChangePct < 0;
  }
}

import "./stock.html";
import "./stock.scss";
