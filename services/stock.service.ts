import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Stock } from "../models/stock";

@Injectable()
export class StockService {

  constructor(@Inject(Http) private http: Http) {

  }

  public async get(ticker: string) {
    let data = (await this.http.get(this.getTickerUrl(ticker)).toPromise()).json().query.results.quote;
    return new Stock(ticker, data);
  }

  private getTickerUrl(ticker: string) {
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22${ticker}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
  }
}
