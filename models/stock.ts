export class Stock {
  public name: string;
  public ticker : string;
  public currentPrice: number;
  public currentChangePct: number;
  public currentVolume: number;

  public constructor(ticker: string, data: any) {
    this.ticker = ticker;
    
    if (data) {
        this.name = data.Name;
        this.currentPrice = data.LastTradePriceOnly;
        this.currentChangePct = data.Change;
        this.currentVolume = data.Volume;
    }
  }
  
}
