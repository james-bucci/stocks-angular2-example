import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Stock } from "../models/stock";

@Injectable()
export class StockService {

  constructor(@Inject(Http) private http: Http) {

  }

  public async get(ticker: string) {
    let url = this.getTickerUrl(ticker);
    let res = await this.http.get(url).toPromise();

    let data = res.json().query.results.quote;

    let stock = new Stock(data.symbol);
    stock.name = data.Name;
    stock.currentPrice = data.Bid;
    stock.currentChangePct = data.Change;
    stock.currentVolume = data.Volume;
    return stock;
  }

  private getTickerUrl(ticker: string) {
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${ticker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
  }
}
