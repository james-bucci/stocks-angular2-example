export class Stock {
  public name: string;
  public ticker : string;
  public currentPrice: number;
  public currentChangePct: number;
  public currentVolume: number;

  public constructor(ticker: string) {
    this.ticker = ticker;
  }
}
